let counter = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const style = event.currentTarget.classList;
        if(style.contains("decrease")){
            counter--;
        }else if(style.contains("increase")){
            counter++;
        }else{
            counter = 0;
        }
        if(counter > 0){
            value.style.color = 'green';
        }else if(counter < 0){
            value.style.color = 'red'
        }else{
            value.style.color = 'black'
        }
        value.textContent = counter;
    })
})