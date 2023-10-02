const clock = document.querySelector('.clock');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')

let notification = document.querySelector('.notification')
counterM = 0;

let time = document.querySelector('.time')

plus.addEventListener('click',()=>{
  minutes += 5
})

minus.addEventListener('click',()=>{
  minutes.innerHTML -=5
})
