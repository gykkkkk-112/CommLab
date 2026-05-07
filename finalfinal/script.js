let dropsall = document.querySelectorAll(".drop");
dropsall.forEach(function(onedrop){
    onedrop.style.animationDelay = Math.random() * 5 + "s";
})

let stylebutton = document.querySelector(".changeColor");
stylebutton.addEventListener("click", changeStyle);
function changeStyle(){
    let body = document.querySelector("body");
    // let drop = document.createElement('div');
    let titles = document.querySelector(".title");
    // drop.style.background = 'linear-gradient(transparent, white)';
    let drops = document.querySelectorAll(".drop");
    if (document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        titles.style.color= "white";
        drops.forEach(function(onedrop) {
            onedrop.style.backgroundColor = "white"; 
        });

    }else if (document.body.style.backgroundColor === ""){
        document.body.style.backgroundColor = "black";
        titles.style.color= "white";
        drops.forEach(function(onedrop) {
            onedrop.style.backgroundColor = "white"; 
        });
    }
    else{
         document.body.style.backgroundColor = "white";
        titles.style.color= "black";
        // drops.style.backgroundColor = "white";
        drops.forEach(function(onedrop) {
            onedrop.style.backgroundColor = "darkblue"; 
        });
    }
    


}

let rainplay = document.querySelector(".rainaudio");

document.querySelector(".audio").addEventListener("click", function() {
    if (rainplay.paused){
        rainplay.play(); 
        this.innerHTML = "AUDIO OFF";

    }
    else{
        rainplay.pause();
        this.innerHTML = "AUDIO";
    }
           
});

// setInterval(rainFall, 20);

let startButton = document.querySelector(".begins");
let narrative = document.querySelector(".narrative");
let narrativetext = document.querySelector(".narrative-text");
let story = "Protocol: The Zone no longer exists in the wet soil or the rusted ruins of Pripyat. It has retreated into the architecture of the deep web, deep beneath the vast, forgotten human memories. A <span class='secret-link' id= 'secret'>traveller</span> is finally here. Bravely set foot upon an undiscovered country, seeking to recover the light behind the corrupted data. Welcome to the Digital Zone.  "
let title = document.querySelector(".title");
let buts = document.querySelector(".buts");
let body = document.body;


startButton.addEventListener("click", function(){
    title.style.opacity = "0";
    buts.style.opacity = "0";
    setTimeout(function(){
        title.style.display = "none";
    buts.style.display = "none";
    narrative.style.display = "flex";
    let currentBg = window.getComputedStyle(body).backgroundColor;
        if (currentBg === "rgb(0, 0, 0)") {
            narrative.style.color = "white";
        } else {
            narrative.style.color = "black";
        }
    narrativetext.innerHTML=story;
    let secret = document.querySelector("#secret");
    let transitionLayer = document.querySelector(".transition-layer"); 
    if (secret) {
        secret.addEventListener("click", function() {
            if (transitionLayer) {
                transitionLayer.style.opacity = "1";
            }
            narrative.style.opacity = "0";
            setTimeout(function() {
                window.location.href = "menu.html";
            }, 1500);
        });
    }
    setTimeout(function() {
        narrative.style.opacity = "1";
    }, 1500);
    setTimeout(function() {
        narrative.style.opacity = "1";
        }, 1500);

    }, 1500)
    console.log("Button clicked!");

    let secret = document.querySelector("#secret");
    let transitionLayer = document.querySelector(".transition-layer"); 
    secret.addEventListener("click", traveller);  


})



