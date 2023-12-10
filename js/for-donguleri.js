let users = ["Lorem", "Ipsum", "Dolor"];
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// let i = 0;
// for(; i < 10; i++){
//     console.log(i)
// }

let userListDom = document.querySelector('#userList');

for(index = 0; index < users.length; index++){
    let LiDom = document.createElement('li');
    LiDom.innerHTML = users[index];
    userListDom.appendChild(LiDom);
}