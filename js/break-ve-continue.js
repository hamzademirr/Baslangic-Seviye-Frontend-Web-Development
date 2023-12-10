const LOREM_LIST = ['lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit']

for(let counter = 0; counter < 10; counter++){
    if(counter === 5){
        break;
    }
    console.log(counter)
}

for(let counter = 0; counter < 10; counter++){
    if(counter === 5){
        continue;
    }
    console.log(counter)
}

let ulDom = document.querySelector('#userList')
let index = 0;

// for(; index < LOREM_LIST.length; index++){
//     if(LOREM_LIST[index] == 'dolor'){
//         break;
//     }
//     let liDom = document.createElement('li')
//     liDom.innerHTML = LOREM_LIST[index];
//     ulDom.appendChild(liDom);
// }

for(; index < LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == 'dolor'){
        continue;
    }
    let liDom = document.createElement('li')
    liDom.innerHTML = LOREM_LIST[index];
    ulDom.appendChild(liDom);
}