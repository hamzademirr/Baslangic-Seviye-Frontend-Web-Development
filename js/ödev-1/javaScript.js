let name = prompt("Adınızı girin");

let welcomText = document.querySelector("#welcome>strong");
welcomText.innerHTML = `${name}`;

setInterval(dateUpdate, 1000);

function dateUpdate() {
  let dateNow = new Date()
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let today = dateNow.getDay();
  let date = document.querySelector("#date");
  date.innerHTML =
    [dateNow.getHours(), dateNow.getMinutes(), dateNow.getSeconds()].join(":") +
    " " +
    days[today]
}