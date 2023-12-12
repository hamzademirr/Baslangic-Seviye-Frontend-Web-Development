let listItems = document.querySelectorAll("#list li");
let close = document.querySelectorAll("li span");
closeFuction();
lineThrough();

document.querySelector("button").onclick = function () {
  let ulDom = document.querySelector("#list");
  let liDom = document.createElement("li");
  let text = document.querySelector("input").value;
  liDom.innerHTML = `
    ${text}
    <span class="close">×</span>`;
  ulDom.append(liDom);
  document.querySelector("input").value = "";
  closeFuction();
  lineThrough();
};

function lineThrough() {
  listItems = document.querySelectorAll("#list li");
  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (item.classList == "") {
        item.classList.add("completed");
      } else {
        item.classList.remove("completed");
      }
    });
  });
}

function closeFuction() {
  close = document.querySelectorAll("li span");
  close.forEach(function (item) {
    item.addEventListener("click", function () {
      item.parentElement.remove();
    });
  });
}