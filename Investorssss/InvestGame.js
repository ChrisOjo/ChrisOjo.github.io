// User inputs
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

let volatility = 10;

let highSlant = 0.75;
let lowSlant = 0.25;
let medSlant = 0.5;
let flatSlant = 0;

let gameStep;

let variance = 0;

let gameActive = true;

// Main Method
newAvg();

/* Runs Code when Spacebar is pressed */
document.body.onkeyup = function(space) {
    if(space.keyCode == 32) {
        for(let i = 0; i < 1; i++) {
            
            initialStockValue = stockValue;

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

            console.log("Invested Money");
            console.log(moneyInvested);
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
}

// Functions

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

    stockValue = defaultStockAvg;
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
        variance = Math.floor(Math.random() * 30 * volatility)
        stockValue = stockValue + variance;

        console.log(upperLimit)
        console.log(stockValue)
    }

    // stockValue = upperLimit;
}

function downDemo() {
    lowerLimit = stockValue - Math.floor(Math.random() * 1000) - 500
    variance = Math.floor(Math.random() * 100 * volatility)
    upperLimit = stockValue + variance;

    console.log(upperLimit)
    console.log(stockValue)

    while(stockValue > lowerLimit) {
        variance = Math.floor(Math.random() * 30 * volatility)
        stockValue = stockValue - variance;

        console.log(lowerLimit)
        console.log(stockValue)
    }

    // stockValue = lowerLimit;
}

function middleDemo() {
    upperLimit = stockValue + Math.floor(Math.random() * 1000) + 500
    lowerLimit = stockValue - Math.floor(Math.random() * 1000) - 500

    while(upperLimit > lowerLimit) {
        variance = Math.floor(Math.random() * 20 * volatility)
        upperLimit = upperLimit - variance;
        lowerLimit = lowerLimit + variance;

        console.log(upperLimit)
        console.log(lowerLimit)
    }

    stockValue = lowerLimit;
}