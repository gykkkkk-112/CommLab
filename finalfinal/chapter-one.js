function getScrollPercentage() {
    let scrolledAlready = window.scrollY;
    let pageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;
    let possibleScrollSpace = pageHeight - windowHeight;
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}

function windowWasScrolled() {
    // console.log("scrolled!")
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);
    let lineWidth = 250;
    let numLines = 20;
    let numPixelsUncovered = percentage*(lineWidth*numLines);
    // console.log("numPixelsUncovered", numPixelsUncovered);
    let lineNumber = Math.ceil(numPixelsUncovered/lineWidth);
    
    let pixelsOfCurrentLine = numPixelsUncovered%lineWidth;
    // console.log("line:", lineNumber, "  pixels:", pixelsOfCurrentLine)

    let currentLine = document.querySelector(".line:nth-child("+lineNumber+")")
    // console.log(currentLine)

    let x = 10
    let stepsOfX = Math.round(pixelsOfCurrentLine/x)*x
    currentLine.style.width = stepsOfX + "px";
    if(lineNumber<1){
        document.querySelector(".line:nth-child("+1+")").style.width= "0px";
    }
    if(lineNumber>1){
        document.querySelector(".line:nth-child("+1+")").style.width= lineWidth+"px";
    }
    if(lineNumber<2){
        document.querySelector(".line:nth-child("+2+")").style.width= "0px";
    }
    if(lineNumber>2){
        document.querySelector(".line:nth-child("+2+")").style.width= lineWidth+"px";
    }
    if(lineNumber<3){
        document.querySelector(".line:nth-child("+3+")").style.width= "0px";
    }
    if(lineNumber>3){
        document.querySelector(".line:nth-child("+3+")").style.width= lineWidth+"px";
    }
    if(lineNumber<4){
        document.querySelector(".line:nth-child("+4+")").style.width= "0px";
    }
    if(lineNumber>4){
        document.querySelector(".line:nth-child("+4+")").style.width= lineWidth+"px";
    }
    if(lineNumber<5){
        document.querySelector(".line:nth-child("+5+")").style.width= "0px";
    }
    if(lineNumber>5){
        document.querySelector(".line:nth-child("+5+")").style.width= lineWidth+"px";
    }
    if(lineNumber<6){
        document.querySelector(".line:nth-child("+6+")").style.width= "0px";
    }
    if(lineNumber>6){
        document.querySelector(".line:nth-child("+6+")").style.width= lineWidth+"px";
    }
    if(lineNumber<7){
        document.querySelector(".line:nth-child("+7+")").style.width= "0px";
    }
    if(lineNumber>7){
        document.querySelector(".line:nth-child("+7+")").style.width= lineWidth+"px";
    }
    if(lineNumber<8){
        document.querySelector(".line:nth-child("+8+")").style.width= "0px";
    }
    if(lineNumber>8){
        document.querySelector(".line:nth-child("+8+")").style.width= lineWidth+"px";
    }
    if(lineNumber<9){
        document.querySelector(".line:nth-child("+9+")").style.width= "0px";
    }
    if(lineNumber>9){
        document.querySelector(".line:nth-child("+9+")").style.width= lineWidth+"px";
    }
    if(lineNumber<10){
        document.querySelector(".line:nth-child("+10+")").style.width= "0px";
    }
    if(lineNumber>10){
        document.querySelector(".line:nth-child("+10+")").style.width= lineWidth+"px";
    }
    if(lineNumber<11){
        document.querySelector(".line:nth-child("+11+")").style.width= "0px";
    }
    if(lineNumber>11){
        document.querySelector(".line:nth-child("+11+")").style.width= lineWidth+"px";
    }
    if(lineNumber<12){
        document.querySelector(".line:nth-child("+12+")").style.width= "0px";
    }
    if(lineNumber>12){
        document.querySelector(".line:nth-child("+12+")").style.width= lineWidth+"px";
    }
    if(lineNumber<13){
        document.querySelector(".line:nth-child("+13+")").style.width= "0px";
    }
    if(lineNumber>13){
        document.querySelector(".line:nth-child("+13+")").style.width= lineWidth+"px";
    }
    if(lineNumber<14){
        document.querySelector(".line:nth-child("+14+")").style.width= "0px";
    }
    if(lineNumber>14){
        document.querySelector(".line:nth-child("+14+")").style.width= lineWidth+"px";
    }
    if(lineNumber<15){
        document.querySelector(".line:nth-child("+15+")").style.width= "0px";
    }
    if(lineNumber>15){
        document.querySelector(".line:nth-child("+15+")").style.width= lineWidth+"px";
    }
    if(lineNumber<16){
        document.querySelector(".line:nth-child("+16+")").style.width= "0px";
    }
    if(lineNumber>16){
        document.querySelector(".line:nth-child("+16+")").style.width= lineWidth+"px";
    }
    if(lineNumber<17){
        document.querySelector(".line:nth-child("+17+")").style.width= "0px";
    }
    if(lineNumber>17){
        document.querySelector(".line:nth-child("+17+")").style.width= lineWidth+"px";
    }
    if(lineNumber<18){
        document.querySelector(".line:nth-child("+18+")").style.width= "0px";
    }
    if(lineNumber>18){
        document.querySelector(".line:nth-child("+18+")").style.width= lineWidth+"px";
    }
    if(lineNumber<19){
        document.querySelector(".line:nth-child("+19+")").style.width= "0px";
    }
    if(lineNumber>19){
        document.querySelector(".line:nth-child("+19+")").style.width= lineWidth+"px";
    }
    if(lineNumber<20){
        document.querySelector(".line:nth-child("+20+")").style.width= "0px";
    }
    if(lineNumber>20){
        document.querySelector(".line:nth-child("+20+")").style.width= lineWidth+"px";
    }
    let audiopoem = document.querySelector(".the-poem");
    audiopoem.play();
    console.log("audio play");
    let allCodes = document.querySelectorAll(".code");
    let numCodes = allCodes.length;
    let showCodes = Math.floor(percentage * numCodes);

    allCodes.forEach(function(code, index){
        if (index <= showCodes) {
            code.style.opacity = "1"; 
        } else {
            code.style.opacity = "0"; 
        }
    });
    // let terminal = document.querySelector(".left-terminal");
    if (lineNumber >= 4) {
        let ss = document.querySelector("#sunshine");
        ss.innerText = "SUNSHINE";
        ss.style.color = "darkcyan"; 
        ss.style.borderColor = "darkcyan";
    }

    
    if (lineNumber >= 8) {
        let ll = document.querySelector("#leaf");
        ll.innerText = "LEAF";
        ll.style.color = "darkcyan";
        ll.style.borderColor = "darkcyan";
    }

   
    if (lineNumber >= 13) {
        let li = document.querySelector("#life");
        li.innerText = "LIFE";
        li.style.color = "darkcyan";
        li.style.borderColor = "darkcyan";
    }

    if (lineNumber >= 20) {
        let gg = document.querySelector("#glass");
        gg.innerText = "GLASS";
        gg.style.color = "darkcyan";
        gg.style.borderColor = "darkcyan";
        setTimeout(function() {
            let entrance = document.querySelector("#entrance");
            if (entrance) {
                console.log("Entrance appearing now..."); 
                entrance.style.opacity = "1"; 
                entrance.style.pointerEvents = "auto";
            }
        }, 1000);
        
    }
    
    let jumpLink = document.querySelector("#jumpLink");
    let layer = document.querySelector(".transition-layer");

    if (jumpLink) {
        jumpLink.onclick = function() {
            layer.style.opacity = "1";
            setTimeout(function() {
                window.location.href = "intro-two.html";
            }, 1500);
        };
    }



    if(percentage>.4){
        let codePerc = (percentage-0.4)/.6;
        console.log("codePerc",codePerc)
        let availableScrollPixels = document.querySelector(".left-terminal").scrollHeight - (window.innerHeight*.6);
        document.querySelector(".left-terminal").scrollTop = availableScrollPixels*codePerc;
    }
    
}


window.addEventListener("scroll", windowWasScrolled);

