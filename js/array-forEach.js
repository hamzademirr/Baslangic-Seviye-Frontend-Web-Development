const PRODUCTS = ['Laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyborad']

// PRODUCTS.forEach((products, index, array) => console.log(products, index, array))

// PRODUCTS.forEach((products, index, array) => console.log(array[index] = products + " ek bilgi"))

PRODUCTS.forEach((products, index, array) => array[index] = `${products.toUpperCase()}`)
console.log(PRODUCTS)


// const USER_LIST_DOM = document.querySelector('#userList');
// for(index = 0; index < users.length; index++){
//     const LI_DOM = document.createElement('li');
//     LI_DOM.innerHTML = users[index];
//     USER_LIST_DOM.appendChild(LI_DOM);
// }

const USER_LIST_DOM = document.querySelector('#userList');
PRODUCTS.forEach(item => {
    const LI_DOM = document.createElement('li');
    LI_DOM.innerHTML = item;
    USER_LIST_DOM.appendChild(LI_DOM);
})