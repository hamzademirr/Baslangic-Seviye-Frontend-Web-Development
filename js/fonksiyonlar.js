let firstName = "Lorem"

function greetings(firstName = ""){ // default parametre
    // console.log(`Merhaba ${firstName} ? firstName : "" `)
    console.log(`Merhaba ${firstName}`)
}

console.log(firstName) //firstName burada bir degisken
greetings("lorem ipsum") //burda ise fonksiyon parametresi olarak gonderilmekte
greetings() //bos gonderilir ise fonsksiyonda tanimli olan deger kullanilir

function greetings2(firstName,lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("ad", "soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id, info){
    let DomObject = document.querySelector(`#${id}`)
    DomObject.innerHTML = info
}

domIdWriteInfo('greeting', greetings2("ad", "soyad"))