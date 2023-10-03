const clock = document.querySelector('.clock');
let toggleClock = document.querySelector('.toggleClock')

let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')

let notification = document.querySelector('.notification')
let mask = document.querySelector('.mask')
let btns = document.querySelector('.btns')

let min = 0;
let sec = 0;


minus.addEventListener('click',()=> {min-1});
plus.addEventListener('click',()=>  {min+1});

clock.innerHTML =`${min}:${sec}`;




