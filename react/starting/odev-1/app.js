import axios from "axios";

async function getdata(number){
    const user = await axios('https://jsonplaceholder.typicode.com/users/' + number);
    const post = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + number);

    let userInfo = [user, post];
    console.log(userInfo);
}

getdata(1);