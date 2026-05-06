document.querySelector(".continueair").onclick = function(){
    console.log("clicked");
    let blade = document.querySelector(".blade");
    blade.play();
    document.querySelector(".p2").style.display = "block";
    setTimeout(function(){document.querySelector(".p2").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".choiceone").onclick = function() {
    
    
    document.querySelector(".choicetwo").style.opacity = "0";
        // setTimeout(function(){ choiceTwo.style.display = "none"; }, 500);
    setTimeout(function(){
        document.querySelector(".choicetwo").style.display = "none";
    }, 100);
    let res1 = document.querySelector(".choice1res");
    res1.style.display = "block"; 
    // res1.style.color = "white";
    
    
    setTimeout(function(){
        res1.style.opacity = "1";
    }, 1000);    
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
    
}

document.querySelector(".choicetwo").onclick = function() {
    
    
    document.querySelector(".choiceone").style.opacity = "0";
        // setTimeout(function(){ choiceTwo.style.display = "none"; }, 500);
    setTimeout(function(){
        document.querySelector(".choiceone").style.display = "none";
    }, 100);
    let res1 = document.querySelector(".choice2res");
    res1.style.display = "block"; 
    // res1.style.color = "white";
    
    
    setTimeout(function(){
        res1.style.opacity = "1";
    }, 1000);   
    
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
    
}

document.querySelector(".choice1res").onclick = function(){
    console.log("clicked");
    document.querySelector(".pthreeone").style.display = "block";
    setTimeout(function(){document.querySelector(".pthreeone").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".choice2res").onclick = function(){
    console.log("clicked");
    document.querySelector(".pthreetwo").style.display = "block";
    setTimeout(function(){document.querySelector(".pthreetwo").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".pthreetwo").onclick = function(){
    console.log("clicked");
    document.querySelector(".p4").style.display = "block";
    setTimeout(function(){document.querySelector(".p4").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".pthreeone").onclick = function(){
    console.log("clicked");
    document.querySelector(".p4").style.display = "block";
    setTimeout(function(){document.querySelector(".p4").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".p4").onclick = function(){
    console.log("clicked");
    document.querySelector(".p4choice").style.display = "block";
    setTimeout(function(){document.querySelector(".p4choice").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".fourchoiceone").onclick = function() {
    
    
    document.querySelector(".fourchoicetwo").style.opacity = "0";
        // setTimeout(function(){ choiceTwo.style.display = "none"; }, 500);
    setTimeout(function(){
        document.querySelector(".fourchoicetwo").style.display = "none";
    }, 100);
    let res1 = document.querySelector(".pfourone");
    res1.style.display = "block"; 
    // res1.style.color = "white";
    
    
    setTimeout(function(){
        res1.style.opacity = "1";
    }, 1000);    

    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
    
}

document.querySelector(".fourchoicetwo").onclick = function() {
    
    
    document.querySelector(".fourchoiceone").style.opacity = "0";
        // setTimeout(function(){ choiceTwo.style.display = "none"; }, 500);
    setTimeout(function(){
        document.querySelector(".fourchoiceone").style.display = "none";
    }, 100);
    let res1 = document.querySelector(".pfourtwo");
    res1.style.display = "block"; 
    // res1.style.color = "white";
    
    
    setTimeout(function(){
        res1.style.opacity = "1";
    }, 1000);    

    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
    
}

document.querySelector(".pfourone").onclick = function(){
    console.log("clicked");
    document.querySelector(".inland").style.display = "block";
    setTimeout(function(){document.querySelector(".inland").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".pfourtwo").onclick = function(){
    console.log("clicked");
    document.querySelector(".inland").style.display = "block";
    setTimeout(function(){document.querySelector(".inland").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".inland").onclick = function(){
    console.log("clicked");
    document.querySelector(".it").style.display = "block";
    setTimeout(function(){document.querySelector(".it").style.opacity = "1";}, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".it").onclick = function(){
    console.log("clicked");
    
    document.querySelector(".finalchoice").style.display = "block";
    setTimeout(function(){document.querySelector(".finalchoice").style.opacity = "1";
    //     let pause = document.querySelector(".p5-pause");
    // let dots = document.querySelector(".final-dots");
    // dots.style.opacity = "1";
    // pause.style.display = "block";

    }, 100);
    document.querySelector(".narrator").scrollTo({
top: document.querySelector(".narrator").scrollHeight,
behavior: 'smooth'
});
}

document.querySelector(".finalchoiceone").onclick = function() {
    setTimeout(function() {
        window.location.href = "intro-real.html";
    }, 1500);
};
document.querySelector(".finalchoicetwo").onclick = function() {
    setTimeout(function() {
        window.location.href = "three-end.html";
    }, 1500);
};

let dropsall = document.querySelectorAll(".memories");
dropsall.forEach(function(onedrop){
    onedrop.style.animationDelay = Math.random() * 5 + "s";
})
