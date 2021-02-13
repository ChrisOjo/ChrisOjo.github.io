var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var random1 = Math.floor(Math.random()*101)+50;
var random2 = Math.floor(Math.random()*101)+50;
var random3 = Math.floor(Math.random()*101)+850;
var random4 = Math.floor(Math.random()*101)+650;

function drawSquare(x,y,w,h,color){
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

drawSquare(random1,random3,50,50,"red");
drawSquare(random4,random2,50,50,"blue");

	var distanceX = ((random4)-(random1));
	document.write(distanceX);

	var distanceY = ((random3)-(random2))/distanceX;
	document.write(" "+distanceY);

	for(var i=0;i<distanceX;i++){
		ctx.beginPath();
		ctx.rect(random1+22.5+i,random3+22.5-distanceY*i,5,5);
		ctx.fillStyle = "green";
		ctx.fill();
		ctx.closePath();
		
	}