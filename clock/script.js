let lastMinute = -1;
function updateclock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    console.log(h,m,s);
    document.querySelector('.hour').innerText = h;
    // document.querySelector('m').innerText = m;
    // document.getElementById('s').innerText = s;
    
    let secondsleft = 60-s;
    // let totallens = spansall.length;
    let end = document.querySelector(".textend");
     let textOne = document.querySelector(".textone");
     

    if (m!= lastMinute){
        lastMinute = m;
        end.innerHTML="";

        let order = m%5;
        let dayTime = document.querySelector("#daytime");
        if (h >= 4) {
        if (h < 11) {
            dayTime.innerText = "morning";
        } else if (h < 13) {
            dayTime.innerText = "noon";
        } else if (h < 17) {
            dayTime.innerText = "afternoon";
        } else if (h < 21) {
            dayTime.innerText = "evening";
        } else {
            dayTime.innerText = "night";
        }
    } else {
        dayTime.innerText = "night";
    }


        if (order == 0) {
            textOne.innerText = "He squinted his eyes at the clock.";
        } else if (order == 1) {
            textOne.innerText = "He felt the stiffness in his shoulder.";
        } else if (order == 2) {
            textOne.innerText = "The room was dim, with the curtains on.";
        } else if (order == 3) {
            textOne.innerText = "The bed feels soft, almost dragging him inside.";
        } else if (order == 4) {
            textOne.innerText = "On the floor, he saw empty bottles and nasty puke everywhere.";
        }
        if (order == 0){
            end.innerHTML = `<span>"</span><span>W</span><span>h</span><span>a</span><span>t</span><span>&nbsp;</span><span>o</span><span>n</span><span>&nbsp;</span><span>e</span><span>a</span><span>r</span><span>t</span><span>h</span><span>&nbsp;</span><span>a</span><span>m</span><span>&nbsp;</span><span>I</span><span>&nbsp;</span><span>d</span><span>o</span><span>i</span><span>n</span><span>g</span><span>?</span><span>"</span>`;
        }else if(order == 1){
            end.innerHTML = `<span>"</span><span>I</span><span>&nbsp;</span><span>f</span><span>e</span><span>e</span><span>l</span><span>&nbsp;</span><span>t</span><span>e</span><span>r</span><span>r</span><span>i</span><span>b</span><span>l</span><span>e</span><span>.</span><span>"</span>`;
        }else if(order == 2){
            end.innerHTML = `<span>"</span><span>I</span><span>&nbsp;</span><span>s</span><span>h</span><span>o</span><span>u</span><span>l</span><span>d</span><span>&nbsp;</span><span>h</span><span>a</span><span>v</span><span>e</span><span>&nbsp;</span><span>g</span><span>o</span><span>n</span><span>e</span><span>&nbsp;</span><span>b</span><span>a</span><span>c</span><span>k</span><span>&nbsp;</span><span>t</span><span>o</span><span>&nbsp;</span><span>t</span><span>h</span><span>e</span><span>&nbsp;</span><span>l</span><span>o</span><span>n</span><span>g</span><span>&nbsp;</span><span>n</span><span>a</span><span>p</span><span>.</span><span>"</span>`;
        }else if(order == 3){
            end.innerHTML = `<span>"</span><span>I</span><span>&nbsp;</span><span>m</span><span>e</span><span>a</span><span>n</span><span>.</span><span>.</span><span>.</span><span>W</span><span>h</span><span>y</span><span>&nbsp;</span><span>n</span><span>o</span><span>t</span><span>?</span><span>"</span>`;
        }else if(order == 4){
            end.innerHTML = `<span>"</span><span>I</span><span>&nbsp;</span><span>s</span><span>h</span><span>o</span><span>u</span><span>l</span><span>d</span><span>&nbsp;</span><span>j</span><span>u</span><span>s</span><span>t</span><span>&nbsp;</span><span>g</span><span>o</span><span>&nbsp;</span><span>b</span><span>a</span><span>c</span><span>k</span><span>&nbsp;</span><span>t</span><span>o</span><span>&nbsp;</span><span>b</span><span>e</span><span>d</span><span>.</span><span>"</span>`;
        }
    }


    
    let spansall = document.querySelectorAll(".textend span");

    // if(secondsleft > totallens){
    //     let jump = s%totallens;
    //     spansall.forEach(function(eachSpan){
    //         if (index === jump){
    //             eachSpan.style.transform = "translateY(10px)";

    //         }else{
    //             eachSpan.style.transform = "translateY(0)";
    //         }

    //         // eachSpan.style.transform = `translate(0px, 0px)`;
    //         // eachSpan.style.color = "white";
    //     })

    // }

    let randomX = Math.random()*100-40;
    let randomY = Math.random()*100-40;
    let minute = (s/60)*100;
    let minuteOne = (m/60)*100;
   
    textOne.style.backgroundImage = `linear-gradient(to right, red ${minute}%, white ${minute}%)`;
    let textminute = document.querySelector(".textMinute");
    textminute.style.backgroundImage = `linear-gradient(to left, cyan ${minuteOne}%, white ${minuteOne}%)`;
    if (s >= 58){
        spansall.forEach(function(eachSpan){
            eachSpan.style.transform = `translate(0px,0px)`;
    
        })


    
    }else if(s < 1){
        spansall.forEach(function(eachSpan){
            eachSpan.style.transform = `translate(0px, 0px)`;
            eachSpan.style.color = "white";
        })
    }else{
        spansall.forEach(function(eachSpan){
        let randomX = Math.random()*100-100;
        let randomY = Math.random()*100-40;
        // eachSpan.style.left = "(randomX)px";
        // eachSpan.style.right = "(randomY)px";
        // eachSpan.style.color = "white";
        eachSpan.style.transform = `translate(${randomX}px, ${randomY}px)`;
        // eachSpan.style.color = "gray";
    })

    }
    

}

setInterval(updateclock, 1000);

