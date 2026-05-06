// add a event listener to the window
// the event we want to listen to is called "scroll"

function windowWasScrolled() {
    // console.log("scrolled!")
    let percentage = getScrollPercentage();
    // console.log("percentage", percentage);
    let numPixelsUncovered = percentage*200;
    console.log("numPixelsUncovered", numPixelsUncovered);
    let lineNumber = Math.ceil(numPixelsUncovered/100)   
    let pixelsOfCurrentLine = numPixelsUncovered%100;
    // console.log("line:", lineNumber, "  pixels:", pixelsOfCurrentLine)
    let currentLine = document.querySelector(".line:nth-child("+lineNumber+")")
    // console.log(currentLine)

    // let x = 3
    // let stepsOfX = Math.round(pixelsOfCurrentLine/x)*x
    // currentLine.style.width = stepsOfX + "px";

}
window.addEventListener("scroll", windowWasScrolled);






function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}