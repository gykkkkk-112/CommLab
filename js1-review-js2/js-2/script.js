
 let container = document.querySelector(".boxContainer");
function addpp(){
    let pp = document.createElement('p');
    document.body.append(pp);
    pp.innerText = "thefu";

}

function addbox(){
    let box = document.createElement("div");
    let container = document.querySelector(".boxContainer");
    //append box to conainer:
    container.append(box);
    box.className="box";
}

function removeAll(){
     let box = document.querySelector(".box");
    box.remove();
}

function movecontainer(){
    let randomNumber=(Math.random()*200)-100;
    console.log(randomNumber);
    container.style.left = randomNumber+"px";
    


}