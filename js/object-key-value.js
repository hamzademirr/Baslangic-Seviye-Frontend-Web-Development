let laptop1 = {
    brand: "Apple",
    model: "air",
    "1kg": 1,
    cpuModel: "M1"
};
console.log(laptop1);

console.log(laptop1.brand); // laptop1.["brand"] seklinde de kullanila bilir
console.log(laptop1["model"]);
console.log(laptop1["1kg"]); // basinda rakam bulunmasindan oturu koseli parantezli yapi kullanilmali
console.log(laptop1["cpuModel"]);

laptop1.brand = "mac1";
console.log(laptop1.brand);

laptop1.version = "2023";
console.log(laptop1.version);


keys = Object.keys(laptop1);
console.log(keys);

keys.forEach(keyInfo => {
    console.log(keyInfo);
    console.log(laptop1 [keyInfo])
});

console.log(
    Object.values(laptop1)
)

let values =  Object.values(laptop1);

values.forEach(value => {
    console.log(value);
})