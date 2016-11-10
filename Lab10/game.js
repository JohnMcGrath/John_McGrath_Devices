var fps = 15;

var ctx;
var canvas;

var sImgX = 0;
var otherSImgX = 0;

var oldTime = Date.now();
var otherOldTime = Date.now();

//Make sure the image is loaded before attempting to use
var myImage = new Image();   // Create new img element
myImage.addEventListener("load", function() {
  // execute drawImage statements here
}, false);
myImage.src = 'walkSprite.png'; // Set source path

//Make sure the image is loaded before attempting to use
var myOtherImage = new Image();   // Create new img element
myOtherImage.addEventListener("load", function() {
  // execute drawImage statements here
}, false);
myOtherImage.src = 'walkSprite.png'; // Set source path

//create the document
canvas = document.createElement("canvas");
document.body.appendChild(canvas);

//set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx = canvas.getContext("2d");

var Game = function(){
	this.init();
};

Game.prototype.init = function(){
	console.log("Game Initialised");
}

Game.prototype.update = function(){
	if (Date.now() - oldTime > 1000 / fps)
	{
		if (sImgX == 3)
		{
			sImgX = 0;
		}

		sImgX++;

		oldTime = Date.now();
		ctx.drawImage(myImage, sImgX*250,0,250,500,0,0,100,200);
		console.log("ImageDrawn");
	}


	if (Date.now() - otherOldTime > 1000 / 50)
	{
		if (otherSImgX == 3)
		{
			otherSImgX = 0;
		}

		otherSImgX++;

		otherOldTime = Date.now();
		ctx.drawImage(myOtherImage, otherSImgX*250,0,250,500,200,0,100,200);
		console.log("ImageDrawn");
	}


	window.requestAnimationFrame(myGame.update);
}