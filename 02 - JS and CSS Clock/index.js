var hourHand = document.querySelector(".hour-hand"),
minHand = document.querySelector(".min-hand"),
secHand = document.querySelector(".second-hand"),
hands = document.querySelectorAll(".hand");


function calcRatio(x, y){
    return (x/y);
}

function rotateDeg(degrees){
    return `rotate(${degrees}deg)`;
}
function setClock(){
    var currDate =  new Date(),
    currHour = currDate.getHours(),
    currMin = currDate.getMinutes(),
    currSec = currDate.getSeconds();
    
    currHour = currHour % 12;

    var currSecRatio = calcRatio(currSec, 60),
    currMinRatio = calcRatio(currMin + currSecRatio, 60) ,
    currHourRatio = calcRatio(currHour + currMinRatio, 12);

    if(currSecRatio == 0){
        
        hands.forEach(hand=>{
            hand.classList.add("no-transition");

            setTimeout(() => {
                hand.classList.remove("no-transition");
            }, 100);
        })
        
    }

    hourHand.style.transform = rotateDeg(currHourRatio * 360);
    minHand.style.transform = rotateDeg(currMinRatio * 360);
    secHand.style.transform = rotateDeg(currSecRatio * 360);
}

setInterval(setClock, 1000);