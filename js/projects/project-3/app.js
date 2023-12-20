const reviews = [
    {
        id: 1,
        name: "Suzan Kaya",
        job: "Web Developer",
        img: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor. Enim quo explica reprehenderit mollitia blanditiis? sit amet consectetur adipisicing elit"
    },
    {
        id: 2,
        name: "Ahmet Balci",
        job: "backEnd developer",
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor. Enim quo explica reprehenderit mollitia blanditiis? sit amet consectetur adipisicing elit"
    },
    {
        id: 3,
        name: "Elif Keskin",
        job: "frontEnd developer",
        img: "https://images.unsplash.com/photo-1524550158212-33f2ff985344?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor. Enim quo explica reprehenderit mollitia blanditiis? sit amet consectetur adipisicing elit"
    },
    {
        id: 4,
        name: "Nalan Duran",
        job: "Ik",
        img: "https://images.unsplash.com/photo-1484588168347-9d835bb09939?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor. Enim quo explica reprehenderit mollitia blanditiis? sit amet consectetur adipisicing elit"
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img; // img.src = reviews[currentItem].img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});