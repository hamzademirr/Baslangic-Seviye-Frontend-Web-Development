let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);

let alertDom = document.querySelector('#alert')
const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#userName");
  const SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDom.innerHTML = alertFunction(
        "Durum Bilgisi:",
        "Eksik bilgi girdin",
        "danger"
    )
  }
}

let userListDom = document.querySelector("#userList");
const addItem = (userName, score) => {
  let liDom = document.createElement("li");
  liDom.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>`;
  liDom.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  );
  userListDom.append(liDom);
};