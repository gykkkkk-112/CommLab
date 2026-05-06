
let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound = document.querySelector("#catSound");
let fastButton = document.querySelector("#fastButton");
let slowButton = document.querySelector("#slowButton");
let speedDisplay = document.querySelector("#speed");
let soundSpeed = 1;

function playsound(){
    console.log("play me");
    catSound.play();
}

playBtn.addEventListener("click",playsound)

fastButton.addEventListener("click", function(){
    soundSpeed = soundSpeed*1.1;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
})

slowButton.addEventListener("click", function(){
    soundSpeed = soundSpeed*0.9;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
})
