const users = [
    {
        name: "Mehmet",
        age: 29
    },
    {
        name: "Mehmet",
        age: 21
    },
    {
        name: "Sevilay",
        age: 20
    }
];

/* 
    push
    map
    find
    filter
    some
    every
    includes
*/

// push
users.push("Ayse");
console.log(users);

//map
users.map((item) => {
    console.log(item.name);
});                      

//find
const result = users.find((item) => users.name === "Mehmet" && users.age > 20);
console.log(result);

//filter
const filtered = users.filter((item) => users.name === "Mehmet" && users.age > 20);
console.log(filtered);

//some
const some = users.some((item) => item.age === 20); // istenlen deger var ise true yoksa false
console.log(some);

//every
const every = users.every((item) => item.age > 18); // tum elemanlar sarta uyarsa true
console.log(every);

//includes
const fruits = ["Elma", "Muz", "Portakal"];
const isIncluded = fruits.includes("Muz"); //listede var ise true
console.log(isIncluded);