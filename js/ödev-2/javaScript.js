let list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : ["su ic", "kod yaz", "calis"];
let ulDom = document.querySelector("#list");

// function lineThrough() {
//   listItems = document.querySelectorAll("#list li");
//   listItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       console.log("tiklandi");
//       if (item.classList == "") {
//         item.classList.add("completed");
//       } else {
//         item.classList.remove("completed");
//       }
//     });
//   });
// }

// function closeFuction() {
//   close = document.querySelectorAll("li span");
//   close.forEach(function (item) {
//     item.addEventListener("click", function () {
//       item.parentElement.remove();
//     });
//   });
// }

const addListenerSpan = (spanDom, liDom) => {
  spanDom.addEventListener("click", () => {
    liDom.remove();
    let index = list.indexOf(liDom.innerText.slice(0, -1));
    list.splice(index, 1);
    localStorage.setItem("list",JSON.stringify(list));
  });
}

const addListenerLi = (liDom) => {
  liDom.addEventListener("click", () => {
    console.log("tiklandi");
    if (liDom.classList == "") {
      liDom.classList.add("completed");
    } else {
      liDom.classList.remove("completed");
    }
  });
}

const addItem = (text) => {
  const liDom = document.createElement("li");
  const spanDom = document.createElement("span");
  spanDom.innerHTML = "×";
  spanDom.classList.add("close");
  liDom.innerHTML = text;
  liDom.append(spanDom);
  ulDom.append(liDom);
  document.querySelector("input").value = "";
  addListenerLi(liDom);
  addListenerSpan(spanDom, liDom);
  // closeFuction();
  // lineThrough();
}

list.forEach((text) => {
  addItem(text);
});

document.querySelector("button").addEventListener("click", () => {
  const text = document.querySelector("input").value;
  addItem(text);
  list.push(text);
  localStorage.setItem("list",JSON.stringify(list));
});