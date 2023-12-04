let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() //default islemi engellendi
    console.log("islem gonderildi")
    let scroreInputDom = document.querySelector('#score')
    console.log(scroreInputDom.value)
    localStorage.setItem('score', scroreInputDom)
}