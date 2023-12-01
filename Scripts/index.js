let toggleClock = document.querySelector('.toggleClock')
let notification = document.querySelector('.notification')
let url = document.querySelector('.url')
//miliseconds
let secondMili = 1000;
let totalSeconds = 60;
let minuteMili = 60000;
let hourMili = 1440000;
//variables
let sec = document.querySelector('.seconds')
let min = document.querySelector('.minutes')
let iframe= document.querySelector('.iframeDiv')


// const musicLink = ()=>{
//   iframe.innerHTML = `<iframe src="https://www.youtube.com/embed/${url.value.slice(32)}?autoplay=1&mute=0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

// }


let pomodoro = ()=>{
  sec.value=59;
  min.value-=1 ;
  setInterval(()=>{
    
   if(sec.value>0){
    console.log(sec.value-=1) 
   }
 },1000)

setInterval(()=>{
  if(min.value > 0){
    console.log(min.value-=1)
    sec.value = 59
  }
},60000) 

}

  
toggleClock.addEventListener('click',pomodoro )
