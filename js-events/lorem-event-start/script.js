let s = document.querySelector("span");
console.log(s);

function spanHovered(eventInfo){
    console.log(eventInfo.target);
    console.log("hello");
    eventInfo.target.style.color = "red";
    let randomX = Math.random()*200-100;
    let randomy = Math.random()*200-100;
    eventInfo.target.style.transform = "translate("+ randomX +"px, 40px)";
    eventInfo.target.style.transform = "translate("+ randomy +"px, 50px)";
}

s.addEventListener("mouseover",spanHovered);


function addHover(element){
    element.addEventListener("mouseover", spanHovered);
}

let allspans = document.querySelectorAll("spam");
allspans.forEach(addHover);
