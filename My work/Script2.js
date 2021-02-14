// User inputs
let pinchType;
let upPinch = "upPinch";
let downPinch = "downPinch";
let middlePinch = "middlePinch";

let upperLimit;
let lowerLimit;

let defaultMoney = 1000;
let defaultInvest = 100;

let defaultStockMax = 5000;
let defaultStockMin = 1;
let defaultStockAvg = 1700;

let stockValue = defaultStockAvg;

let volatility = 10;

let highSlant = 0.75;
let lowSlant = 0.25;
let medSlant = 0.5;
let flatSlant = 0;

let gameStep;

let variance;

let gameActive = true;

// Main Method
newAvg();

var randomx1 = Math.floor(Math.random()*51)+50;
var randomx2 = Math.floor(Math.random()*51)+250;
var randomx3 = Math.floor(Math.random()*51)+450;
var randomx4 = Math.floor(Math.random()*51)+650;
var randomy1 = Math.floor(Math.random()*801)+50;
var randomy2 = Math.floor(Math.random()*801)+50;
var randomy3 = Math.floor(Math.random()*801)+50;
var randomy4 = Math.floor(Math.random()*801)+50;

       var start = 1; 
       var distanceXs;
       var check;

/* Runs Code when Spacebar is pressed */
document.body.onkeyup = function(press) {
    if(press.code == "Space") {
    
    step();
    }
  }

// Functions

/* Runs the next step of code */
function step() {
    gameStep = Math.floor(Math.random() * 6);

    switch(gameStep) {
        case 0:
            newAvg();
            break;
        case 1:            
        case 2:
        case 3:
        case 4:
            calculateValue();
            break;
        case 5:
            pinch();
            break;
    }
}

function calculateValue() {
    stockValue = defaultStockAvg;
    console.log("Default Variance");
    
    variance = Math.floor(Math.random() * 100 * volatility)
    console.log(stockValue + variance);
    console.log(stockValue);
    
    variance = Math.floor(Math.random() * 100 * volatility)
    console.log(stockValue - variance);
    console.log(stockValue);
}

function newAvg() {
    defaultStockAvg += Math.floor(Math.random() * 100) - 50
    console.log("Set Stock Value")
    console.log(defaultStockAvg);
}

function pinch() {
    pinchType = Math.floor(Math.random() * 3);
    
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

        console.log(upperLimit)
        console.log(stockValue)
    }
}

function downDemo() {
    lowerLimit = stockValue - Math.floor(Math.random() * 1000) - 500
    variance = Math.floor(Math.random() * 100 * volatility)
    upperLimit = stockValue + variance;

    console.log(upperLimit)
    console.log(stockValue)

    while(stockValue > lowerLimit) {
        variance = Math.floor(Math.random() * 40 * volatility)
        stockValue = stockValue - variance;

        console.log(lowerLimit)
        console.log(stockValue)
    }
}

function middleDemo() {
    upperLimit = stockValue + Math.floor(Math.random() * 1000) + 500
    lowerLimit = stockValue - Math.floor(Math.random() * 1000) - 500

    while(upperLimit > lowerLimit) {
        variance = Math.floor(Math.random() * 30 * volatility)
        upperLimit = upperLimit - variance;
        lowerLimit = lowerLimit + variance;

        console.log(upperLimit)
        console.log(lowerLimit)
    }
}

//Draws first square
function drawSquare(x,y,w,h,color){
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

//Draws lines
function drawLine(X1,Y1,X2,Y2){
    var distanceX = ((X2)-(X1));
    var distanceY = ((Y1)-(Y2))/distanceX;
	for(var i=0; i<distanceX; i++){
		ctx.beginPath();
		ctx.rect(X1+i,Y1-distanceY*i,5,5);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.closePath();
	}
}

//Draws line when space is pressed

//CHANGE THE randomY4 TO THE THE NEW Y VALUE

if(start == 1){
    drawSquare(randomx1,randomy1,5,5,"red");                
    start = 2;
}
document.body.onkeyup = function(press) {
    if(press.code == "Space") {
    if(start == 5){
        canvas.width = 0;
        canvas.width = 1500;

        drawLine(randomx1,randomy1,randomx2,randomy2);
        drawLine(randomx2,randomy2,randomx3,randomy3);
        drawLine(randomx3,randomy3,randomx4,randomy4);
        distanceXs = randomx2 - randomx1;
        randomx1 = randomx2 - distanceXs;
        randomx2 = randomx3 - distanceXs;
        randomx3 = randomx4 - distanceXs;
        randomy1 = randomy2;
        randomy2 = randomy3;
        randomy3 = randomy4;
        randomx4 = Math.floor(Math.random()*51)+650;
        randomy4 = Math.floor(Math.random()*801)+50;
        }

    if(start == 4){
        canvas.width = 0;
        canvas.width = 1500;
        
        drawLine(randomx1,randomy1,randomx2,randomy2);
        drawLine(randomx2,randomy2,randomx3,randomy3);
        drawLine(randomx3,randomy3,randomx4,randomy4);
        distanceXs = randomx2 - randomx1;
        randomx1 = randomx2 - distanceXs;
        randomx2 = randomx3 - distanceXs;
        randomx3 = randomx4 - distanceXs;
        randomy1 = randomy2;
        randomy2 = randomy3;
        randomy3 = randomy4;
        randomx4 = Math.floor(Math.random()*51)+650;
        randomy4 = Math.floor(Math.random()*801)+50;
        start = 5;
        }

    if(start == 3){
        canvas.width = 0;
        canvas.width = 1500;
        
        drawLine(randomx1,randomy1,randomx2,randomy2);
        drawLine(randomx2,randomy2,randomx3,randomy3);        
        start = 4;
        }
    
    if(start == 2){
        canvas.width = 0;
        canvas.width = 1500;

        drawLine(randomx1,randomy1,randomx2,randomy2);                 
        start = 3;
        }
    }
    
}
