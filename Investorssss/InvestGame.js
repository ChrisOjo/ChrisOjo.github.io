// User inputs
let pinchType;
let upPinch = 1;
let downPinch = 2;
let middlePinch = 3;

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

let variance;

let gameActive = true;

// Main Method
calculateValue();
newAvg();
calculateValue();
pinch();


// Functions

/*function gameStart() {
    while(gameActive) {
        
    }
}*/

function calculateValue() {
    stockValue = defaultStockAvg;
    
    variance = Math.floor(Math.random() * 100 * volatility)
    console.log(stockValue);
    console.log(stockValue + variance);
    console.log(stockValue);
    
    variance = Math.floor(Math.random() * 100 * volatility)
    console.log(stockValue - variance);
    console.log(stockValue);
}

function newAvg() {
    defaultStockAvg += Math.floor(Math.random() * 100) - 50
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