let monkeyEnclosure = document.querySelector(".enclosure");

function newMonkey(){
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.className = "monkey";
    p.innerText = "monkey";
    let randomY = Math.random()*100-50;
    let randomX = Math.random()*100-50;
    p.style.top = randomY+"px";
    p.style.left = randomX+"px";
    div.append(p);
    monkeyEnclosure.append(div);

}

function newAnimal(name, enclosure){
    
    
}
