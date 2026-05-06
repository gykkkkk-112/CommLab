let leaf = document.querySelector("#leaf");
let glass = document.querySelector("#glass");
let life = document.querySelector("#life");
let sun = document.querySelector("#sunshine");

let donecount = 0;

function check1() {
    let word = leaf.value;
    if (word == "leaf") {
        leaf.style.color = "green";
        leaf.style.borderBottomColor = "green";
        let winleaf = document.querySelector("#leafwindows");
        setTimeout(function() {
            // winleaf.style.backgroundColor = "black";
            // winleaf.style.border = "none";
            // winleaf.innerHTML = ""; 
            winleaf.style.opacity = "0";
            donecount++;
            countProgress();

        }, 1000);
        
    }
}

function check2() {
    let word = glass.value;
    if (word == "glass") {
        glass.style.color = "green";
        glass.style.borderBottomColor = "green";
        let winglass = document.querySelector("#glasswindows");
        setTimeout(function() {
            winglass.style.opacity = "0";
            donecount++;
            countProgress();
        }, 1000);
        
    }
}

function check3() {
    let word = life.value;
    if (word == "life") {
        life.style.color = "green";
        life.style.borderBottomColor = "green";
        let winlife = document.querySelector("#lifewindows");
        setTimeout(function() {
            // winlife.style.backgroundColor = "black";
            // winlife.style.border = "none";
            // winlife.innerHTML = ""; 
            winlife.style.opacity = "0";
            donecount++;
            countProgress();
        }, 1000);
        
    }
}

function check4() {
    let word = sun.value;
    if (word == "sunshine") {
        sun.style.color = "green";
        sun.style.borderBottomColor = "green";
        let winsun = document.querySelector("#sunshinewindows");
        setTimeout(function() {
            // winlife.style.backgroundColor = "black";
            // winlife.style.border = "none";
            // winlife.innerHTML = ""; 
            winsun.style.opacity = "0";
            donecount++;
            countProgress();
        }, 1000);
        
    }
}

function countProgress() {
    if (donecount === 4) {
        let windows = document.querySelectorAll(".windows");
        setTimeout(function(){
            windows.forEach(function(win){
            win.style.display = "none";
        })}, 1500)
        // windows.forEach(function(win){
        //     win.style.display = "none";
        // })
        setTimeout(function() {
            let nextPage = document.querySelector(".next-page");
            nextPage.style.display = "block";
        }, 2000);
    }
}