var hourHand = document.querySelector(".hour-hand"),
minHand = document.querySelector(".min-hand"),
secHand = document.querySelector(".second-hand");

function calcDegrees(x, y){
    return ((x/y)*360) % 360;
}

function rotateDeg(degrees){
    return `rotate(${degrees}deg)`;
}

function setDate(){
    var currDate = new Date(),
    currHour = currDate.getHours(),
    currMin = currDate.getMinutes(),
    currSec = currDate.getSeconds();
    
    currHour = currHour % 12;
    if(currHour === 0) currHour = 12;

    var currSecDegrees = calcDegrees(currSec, 60),
    currMinDegrees = calcDegrees(currMin, 60),
    currHourDegrees = calcDegrees(currHour, 12);

    hourHand.style.transform = rotateDeg(currHourDegrees);
    minHand.style.transform = rotateDeg(currMinDegrees);
    secHand.style.transform = rotateDeg(currSecDegrees);
}

setInterval(setDate, 1000);