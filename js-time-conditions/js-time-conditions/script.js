let inputBox = document.querySelector("#inputBox") // = select the input element
let output = document.querySelector("#output") // = select the output div
let myButton = document.querySelector("#myButton") 
let clickCounter = 0;// = select the button


// challenge 1: 
// when the button is clicked
// change the styling of the output text

myButton.addEventListener("click", appendCountdown);

function inputChanged(){
    console.log("clicked");

    // const button = document.querySelector("button");
    output.style.color = "red";
    // document.myButton.append(myButton);
    clickCounter = clickCounter+1;

}
// }


// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:

// inputBox.addEventListener("input", inputChanged);

function inputChanged(eventInfo){
    // output.innerText = ""
    let text = inputBox.value;
//    output.innerText = text;
if (text == 'spin'){
        spin(inputBox)

    }
}






// function to spin an element 
function spin(element){
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}



// -------- PART 2








let messageBoard = document.querySelector("#messageBoard");



function appendCountdown(){
    addMessage("press the button " + clickCounter + " times");
}


setInterval(appendCountdown, 1000);


// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
    
}

