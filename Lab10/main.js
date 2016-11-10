//Global Variable
var App = {};
var fps = 30;

var ctx;
var canvas;

//create the document
canvas = document.createElement("canvas");
document.body.appendChild(canvas);

//set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function main()
{
	myGame = new Game();
	myGame.update();
}
