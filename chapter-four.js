let blinkBtn = document.querySelector('.blink-btn');
let layer = document.querySelector('.layer');
let narrativeText = document.querySelector('.narrative-text');
let glass = document.querySelector('.glassone');

blinkBtn.addEventListener("click", blink);

function blink(){
    if (blinkBtn.innerText === "BLINK"){
        layer.style.opacity = "1";
        setTimeout(function() {
            let rain = document.querySelector(".rainsong");
            rain.play();
            layer.style.opacity = '0';
            narrativeText.innerText = "Now... try to move the glass with your mind.";
            blinkBtn.innerText = "MOVE";
        }, 500);
    } else if (blinkBtn.innerText === "MOVE") {
        narrativeText.innerText = "Focusing... wait for 5 seconds.";
        // blinkBtn.innerText = "MOVE AGAIN";
        glass.style.transition = "all 8s ease-in-out";
        setTimeout(function() { 
            blinkBtn.style.display = "none"; 
            glass.style.transform = "translate(150px, -100px) rotate(20deg)";
            setTimeout(function() {
                narrativeText.innerText = "It moved. Now try to move it to the other side.";
                blinkBtn.innerText = "MOVE AGAIN";
                blinkBtn.style.display = "block"; 
                blinkBtn.style.opacity = "1";
            }, 8000);
            
            // narrativeText.innerText = "It moved. Now try to move it the other side.";
        }, 5000);
    }else if (blinkBtn.innerText === "MOVE AGAIN") {
        narrativeText.innerText = "Focus harder... Wait...";
        // blinkBtn.innerText = "MOVE AGAIN";
        glass.style.transition = "all 8s ease-in-out";
        setTimeout(function() { 
            blinkBtn.style.display = "none"; 
            glass.style.transform = "translate(-150px, -100px) rotate(-20deg)";
            setTimeout(function() {
                narrativeText.innerText = "Now...Why don't we try to break it?";
                blinkBtn.innerText = "BREAK";
                blinkBtn.style.display = "block"; 
                blinkBtn.style.opacity = "1";
            }, 8000);
            
            // narrativeText.innerText = "It moved. Now try to move it the other side.";
        }, 5000);
    } else if(blinkBtn.innerText === "BREAK"){
        narrativeText.innerText = "Picture it in your mind...";
        blinkBtn.style.display = "none";
        let spans = document.querySelectorAll(".glassone span");
        let radius = 100;
         setTimeout(function() { 
             spans.forEach(function(span,index){
            let angle = (index / spans.length) * 2 * Math.PI;
            let x = Math.cos(angle)*radius;
            let y = Math.sin(angle)*radius;
            span.style.transform = "translate(" + x + "px, " + y + "px)";

        })         
            setTimeout(function() {
                // glass.style.animation = "rotateClockwise 10s linear infinite";       
                narrativeText.innerText = "Now, it's time to restore it.";
                blinkBtn.innerText = "RESTORE";
                blinkBtn.style.display = "block";              
            }, 800);
        }, 5000);
       
    } else if (blinkBtn.innerText === "RESTORE") {
    narrativeText.innerText = "Everything returns to its place...";
    blinkBtn.style.display = "none";
    let spans = document.querySelectorAll('.glassone span');
    
    spans.forEach(function(span) {
        span.style.transform = "";
    });
    glass.style.transform = "translate(0, 0) rotate(0deg)";
    setTimeout(function() {
        narrativeText.innerText = "The cycle is over. Reality is waiting.";
        blinkBtn.innerText = "RETURN TO START";
        blinkBtn.style.display = "block";
        blinkBtn.onclick = function() {
            layer.style.opacity = "1";
            
            setTimeout(function() {
                window.location.href = "index.html"; 
            }, 1000);
        };
    }, 6000);
}

}