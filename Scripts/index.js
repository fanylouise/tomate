const clock = document.querySelector('.clock')
let toggleClock = document.querySelector('.toggleClock')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let notification = document.querySelector('.notification')

let min = document.querySelector('.minutes')
let sec = document.querySelector('.seconds')
let hour = document.querySelector('.hour')

let sixty = 60;

let pomodoro = () => {
     setInterval(() => {
    if(sixty != -1){
       sec.value = sixty--
    }else{sixty = 59}
  } , 10)
}
toggleClock.addEventListener('click', pomodoro)
