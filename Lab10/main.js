//Global Variable
app = {};
var fps = 30;

var ctx;
var canvas;

//Make sure the image is loaded before attempting to use
var myImage = new Image();   // Create new img element
myImage.addEventListener("load", function() {
  // execute drawImage statements here
}, false);
myImage.src = 'pikachu.png'; // Set source path

//create the document
canvas = document.createElement("canvas");
document.body.appendChild(canvas);

//set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx = canvas.getContext("2d");

function main()
{
	myGame = new Game();
	myGame.update();

	ctx.drawImage(myImage, 10,10);
}
