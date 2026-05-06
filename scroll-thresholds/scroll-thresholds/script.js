window.addEventListener("scroll", windowWasScrolled);
function getscrollPercentage(){
    let scrolledAlready = window.scrollY;
    let pageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;
    let possibleScrollSpace = pageHeight - windowHeight;
    let percentage = (scrolledAlready / possibleScrollSpace)*100;

    return percentage;
    console.log("percentage", percentage);
}

function windowWasScrolled(){
    let percentage = getscrollPercentage();
    console.log("percentage",percentage);
    if (percentage > 33){
        console.log("paragraph appeared");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    }else{
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }
    if (percentage > 78){
        document.querySelector(".two p").style.color = `cyan`;
    }
}
console.log("you scroll");