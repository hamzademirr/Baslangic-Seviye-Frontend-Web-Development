let name = prompt("Adınızı girin")

let welcomText = document.querySelector("#welcome>strong")
welcomText.innerHTML = `${name}`

let dateNow = new Date();
let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let date = document.querySelector("#date")
let today = dateNow.getDay()
date.innerHTML = ([
    dateNow.getHours(),
    dateNow.getMinutes(),
    dateNow.getSeconds(),
  ].join(":") + " " + days[today])