let title = document.getElementById('title');
title.innerHTML += " eklenen bilgi";
console.log(title.innerHTML);

let link = document.querySelector('ul#list>li>a') //veya direk a' nin id si olan #link bilgiside verile bilir
link.innerHTML = "yeni link"
link.style.color = "red"
console.log(link.innerHTML)
