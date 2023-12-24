// setTimeout(() => {
//     console.log('2s');
// }, 2000);

// setInterval(() => {
//     console.log('Her saniye çalışacak');
// }, 1000);

// const sayHi = (callBack) => {
//     callBack();
// };

// sayHi(() => {
//     console.log('hello');
// });

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((data) => data.json())
//     .then((users) => {
//         console.log('users Yüklendi ', users);

//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then((data) => data.json())
//             .then((post1) => {
//                 console.log('post 1 yuklendi', post1)

//                 fetch('https://jsonplaceholder.typicode.com/posts/2')
//                 .then((data) => data.json())
//                 .then((post2) => console.log('post 2 yuklendi', post2))
//             })
//     }) //senkron işlemler olmadıkları için istenilen sırada çıktı alabilmek için işlemleri sıraya konulması gerekir

// async function getdata(){
//     const users = await (
//         await fetch('https://jsonplaceholder.typicode.com/users')).json();
//     const post1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
//     const post2 = await(
//         await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();

//     console.log('user yüklendi', users);
//     console.log('post 1 yüklendi', post1);
//     console.log('post 2 yüklendi', post2);
// }

// getdata();

// (async () => { //fonksiyon olarak tanımlamak istenmez ise anonim fonksiyon tanımlana bilir
//     const users = await (
//         await fetch('https://jsonplaceholder.typicode.com/users')).json();
//     const post1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
//     const post2 = await(
//         await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();

//     console.log('user yüklendi', users);
//     console.log('post 1 yüklendi', post1);
//     console.log('post 2 yüklendi', post2);
// })();


// import axios from "axios";

// (async () => { // fetch de .json a donüstüre bilmek için için ikini await gerekli idi
//     const {data: users} = await (axios('https://jsonplaceholder.typicode.com/users'));
//     const {data: post1} = await (axios('https://jsonplaceholder.typicode.com/posts/1'));
//     const {data: post2} = await (axios('https://jsonplaceholder.typicode.com/posts/2'));

//     console.log('user yüklendi', users);
//     console.log('post 1 yüklendi', post1);
//     console.log('post 2 yüklendi', post2);
// })();



// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if(number === 1){
//             resolve({ text: 'Doğru Çalıştı'});
//         }
//         reject({text: 'hata Olustu'});
//     });
// };

// getComments(2)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
import axios from "axios";
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts/' + post_id);
        resolve(data);
    });
};

(async() => {
    await getUsers()
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    
    try{
        const post = await getPost(1);
        console .log(post);
    }catch(e){
        console.log(e);
    }
})();

Promise.all([getUsers(), getPost(1)])
    .then(console.log)
    .catch(console.log);