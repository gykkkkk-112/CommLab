const cell = document.querySelector(".bacteria");
const arena = document.querySelector(".arena")
movecell(cell);

cell.onclick = kill;

function movecell(el){
    const maxx = arena.offsetWidth - 10;
    const maxy = arena.offsetHeight - 10;
    // const randomx = Math.random()*maxx;
    // const randomy = Math.random()*maxy;

    el.style.left = Math.random()*maxx + "px";
    el.style.top = Math.random()*maxy + "px";
   

    
}
// setInterval(movecell, 1000);
// movecell();

function splitcell(parentCell){
    if(document.querySelectorAll(".bacteria").length > 500)
        return;



    if (!document.body.contains(parentCell)) {
        return; 
    }

    const newcell = document.createElement("div");
    newcell.className = "bacteria";
    // const parentx = ;
    // const parenty = ;
    newcell.style.left = parentCell.offsetLeft+"px";
    newcell.style.top = parentCell.offsetTop+"px";
    arena.append(newcell);
   
    setInterval(function(){
        movecell(newcell);
    }, 1000+Math.random()*500);
    setTimeout(function(){
        splitcell(newcell);
    }, 2000);
    setTimeout(function(){
        splitcell(parentCell);
    }, 2000);
    newcell.onclick = kill;
    
    
}

function kill(){
    this.remove();
}

setInterval(function(){
    movecell(cell);
}, 1000);
// setInterval(splitcell, 2000);
setTimeout(function(){
    splitcell(cell);
},2000);

function addphage(){
    const phage = document.createElement("div");
    phage.className = "phage";
    movecell(phage);
    arena.append(phage);
    setTimeout(function(){
    splitphage(phage);
    },2000);
    setInterval(function(){
        movecell(phage);
    }, 2000);

}

function splitphage(parentphage){
    if (document.querySelectorAll(".phage").length > 20) return;
    if (!document.body.contains(parentphage)) return;
    const newphage = document.createElement("div");
    newphage.className = "phage";
    newphage.onclick = kill;
    newphage.style.left = Math.min(parentphage.offsetLeft, arena.offsetWidth-40)+"px";
    newphage.style.top = Math.min(parentphage.offsetTop, arena.offsetHeight-40)+"px";
    arena.append(newphage);

     setInterval(function(){
        movecell(newphage);
    }, 2000);
    



    setTimeout(function() {
        splitphage(newphage);
    }, 5000);
    setTimeout(function() {
        splitphage(parentphage);
    }, 8000);
}

function distance(phage, bacteria){
    const disx = phage.offsetLeft-bacteria.offsetLeft;
    const disy = phage.offsetTop-bacteria.offsetTop;
    const dis = Math.sqrt(Math.pow(disx , 2)+Math.pow(disy, 2));
    return dis;
}

function hunt(){
    const pphages = document.querySelectorAll(".phage");
    const bacterium = document.querySelectorAll(".bacteria");
    pphages.forEach(function(phage){
        bacterium.forEach(function(bacteria){
            const disb = distance(phage, bacteria);
            if (disb<15){
                bacteria.remove();
                phage.style.transform = "scale(1.3)";
                setTimeout(function(){
                    phage.style.transform = "scale(1)";
                },200);

            }
        })
    })

}

setInterval(hunt, 200);

function addcell(){
    const newcell = document.createElement("div");
    newcell.className = "bacteria";
    arena.append(newcell);
    movecell(newcell);
    newcell.onclick = kill;
     setInterval(function(){
        movecell(newcell);
    }, 1000+Math.random()*500);
    setTimeout(function(){
        splitcell(newcell);
    }, 2000);
}

function nuclear(){
    const bacall = document.querySelectorAll(".bacteria");
    const phageall = document.querySelectorAll(".phage");
    bacall.forEach(fk);
    phageall.forEach(fk);
    
}

function fk(target){
    target.remove();

}