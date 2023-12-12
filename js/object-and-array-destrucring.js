let settings = {
    userName: "LoremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "tulpar.com"
}

// let userName = settings.userName
// console.log(userName)
let {userName: user, password, isActive, ip: serverIp, serverName} = settings
console.log(user, password, isActive, serverIp, serverName)
console.log(settings)
console.log(user)

let {userName: userName2, password: password2, isActive: isActive2, ...newSettings} = settings
console.log(userName2, password2, isActive2, newSettings)

// let settings2 = settings
// settings2.userName = "Degisen bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2) kopyalama yerine atama gerceklesti degisiklikler her ikisi icin de gerceklesmekte

let settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)


let score = [100, 200, 300, 400]

let [score1 ,score2, ...otherScore] = score
console.log(score1 ,score2, otherScore)

let copyOfScore = [...score]