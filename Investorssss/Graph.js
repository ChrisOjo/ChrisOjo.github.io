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


let y1 = 10;
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
let dXs = gap;
let check;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

if(start == 1){
    drawCircle(x1,y1);                
    start = 2;
}

document.body.onkeyup = function(press) {
    if(press.code == "Space") {
        lineTen();
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
        drawLine(x1,y1,x2,y2);                 
        start = 3;
    
    }
}

function lineTwo() {
    if(start == 3){
        drawLine(x2,y2,x3,y3);        
        start = 4;
    }
}

function lineThree() {
    if(start == 4){
        drawLine(x3,y3,x4,y4);
        start = 5;
    }
}

function lineFour() {
    if(start == 5) {
        drawLine(x4,y4,x5,y5);
        start = 6;
    }
}

function lineFive() {
    if(start == 6) {
        drawLine(x5,y5,x6,y6);
        start = 7;
    }
}

function lineSix() {
    if(start == 7){
        drawLine(x6,y6,x7,y7);
        start = 8;
    }
}

function lineSeven() {
    if(start == 8){
        drawLine(x7,y7,x8,y8);
        start = 9;
    }
}

function lineEight() {
    if(start == 9){
        drawLine(x8,y8,x9,y9);
        start = 10;
    }
}

function lineNine() {
    if(start == 10){
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
        y11 = Math.floor(Math.random()*801)+50;
    }
}