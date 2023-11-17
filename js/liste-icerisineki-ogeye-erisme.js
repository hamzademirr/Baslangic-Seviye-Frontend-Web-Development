let lastChild = document.querySelector('ul#list>li:last-child')
lastChild.innerHTML = "son oge degisti"

let firstChild = document.querySelector('ul#list>li:first-child')
firstChild.innerHTML = "ilk oge degisti"

let ulDom = document.querySelector("ul#list")
let liDom = document.createElement('li')

liDom.innerHTML = "olusturulan oge"
ulDom.append(liDom) //sona ekler

let liDom2 = document.createElement('li')
liDom2.innerHTML = "olusturulan oge 2"

ulDom.prepend(liDom2) //basa ekler