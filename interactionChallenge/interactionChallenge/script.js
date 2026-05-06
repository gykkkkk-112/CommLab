// old code:
function spanHovered(eventInfo){
    console.log("hello");

    let btn  = document.querySelector("button");

    eventInfo.target.style.color = "red";
    let randomX = Math.random()*200-100; // -100 to 100
    let randomY = Math.random()*200-100; // -100 to 100
    eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

function addMover(element){
    element.addEventListener("mouseover", spanHovered);
}

let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMover)






window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();
    let firstSpan = document.querySelectorAll("span");
    let randomT=Math.random()*200-300;
    // firstSpan.style.top=percentage*"random"+"px";
    allSpans.forEach(function(spanone){
        spanone.style.top=(percentage+randomT)+"px";
    })
    
    // firstSpan.style.top="";

    // select the first letter
    // move it using the "top" attribute 
    // move it to a point that involves the percentage variable
    
})


function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace) * 100;
    return percentage;
}

function spinElm(element){
    element.style.transform = "rotate(360deg)";
}

function spinAllLetters(){
    let appSpans = document.querySelectorAll("span");
allSpans.forEach(spinElm)
}

// let appSpans = document.querySelectorAll("span");
// allSpans.forEach(spinElm)

document.querySelector("#spinButton").addEventListener("click",spinAllletters)