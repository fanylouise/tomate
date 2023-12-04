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

const frasesPomodoro = [
  "Você consegue fazer qualquer coisa em 25 minutos. Até mesmo procrastinar.",
  "Lembre-se: o importante é a qualidade do trabalho, não a quantidade de tempo que você passa nele.",
  "A cada pomodoro concluído, um pequeno passo para o sucesso!",
  "Não se preocupe em ser perfeito, preocupe-se em ser produtivo.",
  "Trabalhe como um tomate: intenso por 25 minutos e depois faça uma pausa.",
  "A cada pomodoro, você está mais próximo da vitória!",
  "A procrastinação é o inimigo número um. Vamos vencê-la, um pomodoro de cada vez!",
  "Seja produtivo agora, aproveite depois. É assim que você chega lá!",
  "Lembre-se: não é sobre quanto tempo você trabalha, mas sobre quanto trabalho você coloca no tempo.",
  "O pomodoro é como um superpoder. Use-o sabiamente para conquistar o mundo!",
  "Celebre cada pomodoro concluído como uma pequena vitória!",
  "A vida é como um pomodoro. Às vezes, você precisa dar umas sacudidas para liberar o sabor!",
  "Cada pomodoro é uma oportunidade de se superar. Aproveite ao máximo!",
  "Sua tarefa é tão grande quanto você a faz. Divida-a em pomodoros e conquiste-a!",
  "O tempo voa quando você está se divertindo... e também quando está focado em um pomodoro!",
  "Trabalhe como se cada pomodoro fosse seu último. Você ficará surpreso com o que pode realizar!",
];
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


let aplication = ()=>{
  musicLink();
  pomodoro();
  start.classList.add('.displayNon')
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