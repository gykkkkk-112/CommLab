let binpoem = document.querySelector(".binarypoem");
// let r1,g1,b1,r2,g2,b2;

// binpoem.parentElement.addEventListener("mouseover", function() {
//     r1=Math.random()*160 + 50;
//     g1=Math.random()*160 + 50;
//     b1=Math.random()*160 + 50;
//     r2=Math.random()*160 + 50;
//     g2=Math.random()*160 + 50;
//     b2=Math.random()*160 + 50;
// });
// binpoem.addEventListener("scroll", function(){
    
    // // if (maxScroll>0){
    // let percentage = (scrollTop / maxScroll) * 100;
    // if (maxScroll>0){
    //     let r1 = 240-percentage*1.2;
    //     let g1 = 245-percentage*1.4;
    //     let b1 = 255-percentage*1.6;
    //     let r2 = 180-percentage*1.4;
    //     let g2 = 200-percentage*1.5;
    //     let b2 = 220-percentage*1.7;
    //     binpoem.parentElement.style.background ="linear-gradient(135deg, rgb("+r1 + "," + g1 + "," + b1 + "), rgb("+r2 + "," + g2 + "," + b2 + "))";
    //     let brightness = (r1+g1+b1+r2+g2+b2)/6;


    // let textcolor = 255 - brightness;

    // binpoem.style.color ="rgb(" + textcolor + "," + textcolor + "," + textcolor + ")";
    // let scrollTop = binpoem.scrollTop;
    // let maxScroll = binpoem.scrollHeight - binpoem.clientHeight;

    // if (maxScroll > 0) {
    //     let percentage = scrollTop / maxScroll;

    //     let cr1= 255 -(200-r1) * percentage;
    //     let cg1  = 255 -(200-g1) * percentage;
    //     let cb1 = 255 -(200-b1) * percentage;
    //     let cr2 = 255 -(200-r2) * percentage;
    //     let cg2 = 255 -(200-g2) * percentage;
    //     let cb2 = 255 -(200-b2) * percentage;
    //     binpoem.parentElement.style.background = "linear-gradient(150deg, rgb("+cr1 +"," +cg1 + "," + cb1 + "), rgb("+cr2+ ","+ cg2 +","+ cb2 +"))";
    //     let brightness = (cr1+cg1+cb1+cr2+cg2+cb2)/6;
    //     let textcolor = 255 - brightness;

    //     binpoem.style.color =
    //         "rgb(" + textcolor + "," + textcolor + "," + textcolor + ")";
    // }
    // }
    // let backcolor = 240-percentage*1.2;
    // binpoem.parentElement.style.backgroundColor = "rgb("+backcolor+","+backcolor+", 255)";

    // }
    
    
    
// )

binpoem.parentElement.addEventListener("mouseleave", function() {
    binpoem.parentElement.style.background = "white";
});


let box = document.querySelectorAll(".chapterbox");

// box.addEventListener("mouseover", playmusic);

box.forEach(function(boxes){
    boxes.addEventListener("mouseover", function(){
    let audio = document.querySelector(".backgroundmusic");
    audio.play();
    })
})

    


// let boxall = document.querySelectorAll(".chapterbox");
// let chaptertwo = boxall[1];

// let echovideo = document.querySelector(".preview-video");

// chaptertwo.addEventListener("mouseover", function(){
//     echovideo.play();
// })

// chaptertwo.addEventListener("mouseout", function(){
//     echovideo.pause();
// })

