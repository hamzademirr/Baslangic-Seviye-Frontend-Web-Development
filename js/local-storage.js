let user = {userName: "Hamza", isActive: true}
console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user))
let userInfo = localStorage.getItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log(userInfo)