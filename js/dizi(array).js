// arrary olusturma
let domain = "tulpar";
let isActive = true;
let items = [1, 2, 3, domain, isActive];
console.log(items);

// array icersinindeki eleman/oge sayisini ogrenme
console.log(items.length);

// array icerisinden ilk ve son degeri cagirma
console.log(items[0]);
console.log(items[items.length - 1]);
console.log(items[Math.floor(items.length / 2)]);

// degisken iceriginin array olup olmadiginin kontrolu
console.log(typeof(items));

console.log(Array.isArray(items)); // output: true

// array sonuna oge/eleman ekleme -> push
items.push(50)
console.log("50 eklendi: ", items);

// array basina oge/eleman ekleme -> unshift
items.unshift(30)
console.log("30 basa eklendi: ", items);

// array sondaki ogeyi cikarma -> pop
items.pop(); // son degere ihtiyac varsa `let lastItem items.pop()`
console.log(items);

// array bastaki ogeyi cikarma -> shift
items.shift(); // degere ihtiyac varsa `let firstItem items.shjit()`
console.log(items);

// array belirli indexteki degeri degistirme
items[0] = 5
console.log(items);

items[items.lengt - 1] = 100
console.log(items);

// items[1000000] = 100000 // 100000. elemana kadar bos deger tanimlandi 
// console.log(items)

// array icerisinde array
let femailUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femailUsers);
items.push(maleUsers);
console.log(items);

console.log(items.lengt);
console.log(items[0].lengt)
console.log(items[0][0]) // output: Ayse

// array icersiinden oge ayrimak -> splice(pos, item)
let newItem = items.splice(1,3)
console.log("new items: ", newItem)
console.log("items: ", items)

// array icerisindeki ogenin index bilgisini bulma -> indexOf('value')
items.push("lorem")
console.log(items.indexOf('lorem'))

// array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop()
console.log(copyItems)
console.log(items) // bir kopyalama islemi gerceklesmedigi icin orjinal listede de pop islemi gerceklesti

copyItems = items.slice()
copyItems.pop()
console.log(copyItems)
console.log(items)

let es6Items = [...items]
console.log(es6Items)

let allUsers = [...femailUsers, ...maleUsers]
console.log(allUsers)

// array icerisindeki degerleri stringe cevirme
console.log(allUsers.toString())
console.log(allUsers.join("-"))

// array de istenilen index bilgisine oge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melisa")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem")
console.log(allUsers)