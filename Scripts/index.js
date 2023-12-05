let start = document.querySelector('#start');
let restart = document.querySelector('.restart')
let notification = document.querySelector('.notification');
let url = document.querySelector('.url');
//miliseconds
let secondMiliseconds = 1000; 
let minuteMiliseconds = 60000;
//variables
let sec = document.querySelector('.seconds');
let min = document.querySelector('.minutes');
let iframe= document.querySelector('.iframeDiv');

let rest = ()=>{
 console.log(setInterval())
}

let musicLink = ()=>{
  urlStoraged = localStorage.setItem('yturl',url.value)
  urlValue = localStorage.getItem('yturl');
  iframe.innerHTML = `<iframe src="https://www.youtube.com/embed/${url.value.slice(32)}?autoplay=1&mute=0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

}
let secondes =()=>{
  if(sec.value>0){
   var s = setInterval(()=>{
      sec.value-=1
   },secondMiliseconds)
  }
  
}
let minutes =()=>{
  if(min.value > 0){
   var m= setInterval(()=>{
      min.value-=1
      sec.value = 59
    },minuteMiliseconds) 
    }
    
}

let pomodoro = ()=>{
  sec.value=59;
  min.value-=1 ;
  secondes()
  minutes()
  
}
let ring = ()=>{
  setTimeout(()=>{
    notification.volume = 0.2;
    notification.play()
  },1505000)
}


let aplication = ()=>{
  musicLink();
  pomodoro();
  start.remove()
  restart.classList.remove('displayNon')
  ring()
} 

let restartPomo = () =>{
window.location.reload(true)

}
let urlBlank = ()=>{
  url.value = ''
}

start.addEventListener('click',aplication )
restart.addEventListener('click', restartPomo)
url.addEventListener('click', urlBlank)