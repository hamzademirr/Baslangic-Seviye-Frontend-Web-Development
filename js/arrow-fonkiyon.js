function hello(firstName){
    console.log(`Hello ${firstName}`)
}
hello("javaScript")

const helloFuncV1 = (firstName) => { console.log(`Hello ${firstName}`) }
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Hello ${firstName}`)
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) => { console.log(`Hello ${firstName} ${lastName}`) }
helloFuncV3("helloFuncV3", "last name")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Hello ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "info")