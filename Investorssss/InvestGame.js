function im(){
    document.getElementById('box').style.display='none';
   // document.getElementById('but').style.display='none';
    document.getElementById('canvas').style.display= 'inline';
    document.getElementById('canvas').style.display= 'height: 1000px';
    game();
}


function game(){
// Stock Variables
let pinchType;
let upPinch = "upPinch";
let downPinch = "downPinch";
let middlePinch = "middlePinch";

let upperLimit;
let lowerLimit;

let defaultMoney = 1000;
let defaultInvest = 100;

let piggyBank = defaultMoney;
let moneyInvested = 0;

let defaultStockMax = 5000;
let defaultStockMin = 1;
let defaultStockAvg = 1700;

let stockValue = defaultStockAvg;
let initialStockValue;
let currentStockValue;

let volatility = 10;

let highSlant = 0.75;
let lowSlant = 0.25;
let medSlant = 0.5;
let flatSlant = 0;

let gameStep;

let variance = 0;

let gameActive = true;


// Drawing Variables
let base = 50;
let gap = 50;

let x1 = base + gap * 0;
let x2 = base + gap * 1;
let x3 = base + gap * 2;
let x4 = base + gap * 3;
let x5 = base + gap * 4;
let x6 = base + gap * 5;
let x7 = base + gap * 6;
let x8 = base + gap * 7;
let x9 = base + gap * 8;
let x10 = base + gap * 9;
let x11 = base + gap * 10;


let y1 = defaultStockAvg / 6.25;
let y2 = 50;
let y3 = 250;
let y4 = 750;
let y5 = 800;
let y6 = 750;
let y7 = 250;
let y8 = 50;
let y9 = 10;
let y10 = 50;
let y11 = 250;

let start = 1; 
let dXs;
let check;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// Main Method
if(start == 1){
    drawCircle(x1,y1);                
    start = 2;
}

for(let i = 0; i < 10 ; i++) {
    newAvg();
    
    lineNine();
    lineEight();
    lineSeven();
    lineSix();
    lineFive();
    lineFour();
    lineThree();
    lineTwo();
    lineOne();
}
    
console.log("Invested Money");
console.log(moneyInvested);
console.log("Money in Da Bank");
console.log(piggyBank);

/* Runs Code when Spacebar is pressed */
document.body.onkeyup = function(space) {
    if(space.keyCode == 32) {
        for(let i = 0; i < 1; i++) {
            
            initialStockValue = stockValue;
            currentStockValue = initialStockValue;

            step();
            
            if(stockValue > defaultStockMax || defaultStockAvg > defaultStockMax) {
                console.log("Game Over");
                break;
            }
            if(stockValue < defaultStockMin || defaultStockAvg < defaultStockMin) {
                console.log("Game Over");
                break;
            }

            moneyInvested = Math.floor(stockValue / initialStockValue * moneyInvested);

            if(moneyInvested >= 15) {
                moneyInvested -= 15;
            }
            else
            {
                moneyInvested = 0;
            }

            if(piggyBank >= 11) {
                piggyBank = Math.floor((piggyBank * 0.90) - 10);
            }
            else
            {
                piggyBank = 0;
            }

            if(moneyInvested == 0 && piggyBank == 0)
            {
                document.getElementById('canvas').style.display= 'none';
                document.getElementById('over').style.display= 'block';
            }

            console.log("Invested Money");
            console.log(moneyInvested);
            console.log("Money in Da Bank");
            console.log(piggyBank);
        }
        
    }

    if(space.keyCode == 73 && piggyBank > 0) {
        moneyInvested += defaultInvest;
        piggyBank -= defaultInvest;

        console.log("Invest");
        console.log(moneyInvested);
        console.log("piggyBank");
        console.log(piggyBank);
      

    }

    if(space.keyCode == 87 && moneyInvested > 0) {
        moneyInvested -= defaultInvest;
        piggyBank += defaultInvest;

        console.log("Withdraw");
        console.log(moneyInvested);
        console.log("piggyBank");
        console.log(piggyBank);
        
    }
clear();
   score(piggyBank,moneyInvested);
   
}

// Functions
function score(P,I){
    ctx.fillStyle= 'black';
    ctx.font = "30px Georgia";
    ctx.fillText("Piggybank: "+P, 400,40);

    //ctx.font = "30px Georgia";
    ctx.fillText("Investments: "+I, 800,40);
}
function clear(){
    ctx.fillStyle = '#fff';
    ctx.fillRect(0,0,canvas.width,77);
}
/* Runs the next step of code */
function step() {
    gameStep = Math.floor(Math.random() * 5);

    switch(gameStep) {
        case 0:
            newAvg();
            break;
        case 1:
        case 2:
        case 3:
            calculateValue();
            break;
        case 4:
            pinch();
            break;
    }
}

function calculateValue() {
    console.log("Default Variance");
    
    variance = Math.floor(Math.random() * 50 * volatility)
    currentStockValue = stockValue + variance;
    console.log(currentStockValue);
    lineTen();
    currentStockValue = stockValue;
    console.log(currentStockValue);
    lineTen();
    
    variance = Math.floor(Math.random() * 50 * volatility)
    currentStockValue = stockValue - variance;
    console.log(currentStockValue);
    lineTen();
    currentStockValue = stockValue
    console.log(currentStockValue);
    lineTen();
}

function newAvg() {
    defaultStockAvg += Math.floor(Math.random() * 100) - 50
    console.log("Set Stock Value")
    currentStockValue = defaultStockAvg;
    console.log(currentStockValue);

    stockValue = defaultStockAvg;
    lineTen();
}

function pinch() {
    pinchType = Math.floor(Math.random() * 3);
    
    if(stockValue < 1000) {
        while(pinchType = 1) {
            pinchType = Math.floor(Math.random() * 3);
        }
    }

    if(stockValue > 4000) {
        while(pinchType = 0) {
            pinchType = Math.floor(Math.random() * 3);
        }
    }

    switch(pinchType) {
        case 0:
            console.log(upPinch)
            upDemo();
            break;
        case 1:
            console.log(downPinch)
            downDemo();
            break;
        case 2:
            console.log(middlePinch)
            middleDemo();
            break;
    }
}

function upDemo() {
    upperLimit = stockValue + Math.floor(Math.random() * 1000) + 500
    variance = Math.floor(Math.random() * 100 * volatility)
    lowerLimit = stockValue - variance;

    console.log(upperLimit)
    console.log(stockValue)

    while(stockValue < upperLimit) {
        variance = Math.floor(Math.random() * 40 * volatility)
        stockValue = stockValue + variance;

        currentStockValue = upperLimit;
        console.log(currentStockValue)
        lineTen();
        currentStockValue = stockValue;
        console.log(currentStockValue)
        lineTen();
    }
}

function downDemo() {
    lowerLimit = stockValue - Math.floor(Math.random() * 1000) - 500
    variance = Math.floor(Math.random() * 100 * volatility)
    upperLimit = stockValue + variance;

    currentStockValue = upperLimit;
    console.log(currentStockValue)
    currentStockValue = stockValue;
    console.log(currentStockValue)

    while(stockValue > lowerLimit) {
        variance = Math.floor(Math.random() * 40 * volatility)
        stockValue = stockValue - variance;

        currentStockValue = lowerLimit;
        console.log(currentStockValue)
        lineTen();
        currentStockValue = stockValue;
        console.log(currentStockValue)
        lineTen();
    }
}

function middleDemo() {
    upperLimit = stockValue + Math.floor(Math.random() * 1000) + 500
    lowerLimit = stockValue - Math.floor(Math.random() * 1000) - 500

    while(upperLimit > lowerLimit) {
        variance = Math.floor(Math.random() * 30 * volatility)
        upperLimit = upperLimit - variance;
        lowerLimit = lowerLimit + variance;

        currentStockValue = upperLimit;
        console.log(currentStockValue)
        lineTen();
        currentStockValue = lowerLimit;
        console.log(currentStockValue)
        lineTen();
    }

    stockValue = lowerLimit;
    currentStockValue = stockValue;
    lineTen();
}

//Draws first circle
function drawCircle(x,y){
	ctx.beginPath();
	ctx.arc(x,y,2.5,0,360);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
}

//Draws lines
function drawLine(X1,Y1,X2,Y2){
    ctx.beginPath();
    ctx.moveTo(X1, Y1);
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctx.lineTo(X2 , Y2);
    ctx.strokeStyle = "green";
    ctx.stroke();
}

function lineOne() {
    if(start == 2) {
        y2 = currentStockValue / 6.25;
        drawLine(x1,y1,x2,y2);                 
        start = 3;
    
    }
}

function lineTwo() {
    if(start == 3){
        y3 = currentStockValue / 6.25;
        drawLine(x2,y2,x3,y3);        
        start = 4;
    }
}

function lineThree() {
    if(start == 4){
        y4 = currentStockValue / 6.25;
        drawLine(x3,y3,x4,y4);
        start = 5;
    }
}

function lineFour() {
    if(start == 5) {
        y5 = currentStockValue / 6.25;
        drawLine(x4,y4,x5,y5);
        start = 6;
    }
}

function lineFive() {
    if(start == 6) {
        y6 = currentStockValue / 6.25;
        drawLine(x5,y5,x6,y6);
        start = 7;
    }
}

function lineSix() {
    if(start == 7){
        y7 = currentStockValue / 6.25;
        drawLine(x6,y6,x7,y7);
        start = 8;
    }
}

function lineSeven() {
    if(start == 8){
        y8 = currentStockValue / 6.25;
        drawLine(x7,y7,x8,y8);
        start = 9;
    }
}

function lineEight() {
    if(start == 9){
        y9 = currentStockValue / 6.25;
        drawLine(x8,y8,x9,y9);
        start = 10;
    }
}

function lineNine() {
    if(start == 10){
        y10 = currentStockValue / 6.25;
        drawLine(x9,y9,x10,y10);
        start = 11;
    }
}

function lineTen() {
    if(start == 11){
        canvas.width = 1500;

        drawLine(x1,y1,x2,y2);
        drawLine(x2,y2,x3,y3);
        drawLine(x3,y3,x4,y4);
        drawLine(x4,y4,x5,y5);
        drawLine(x5,y5,x6,y6);
        drawLine(x6,y6,x7,y7);
        drawLine(x7,y7,x8,y8);
        drawLine(x8,y8,x9,y9);
        drawLine(x9,y9,x10,y10);
        drawLine(x10,y10,x11,y11);
        y1 = y2;
        y2 = y3;
        y3 = y4;
        y4 = y5;
        y5 = y6;
        y6 = y7;
        y7 = y8;
        y8 = y9;
        y9 = y10;
        y10 = y11;
        y11 = currentStockValue / 6.25;
    }
}

}