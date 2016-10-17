//Global Variable
app={};

var ctx;
var canvas;

//create the document
canvas = document.createElement("canvas");
document.body.appendChild(canvas);

//set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var Game = function(){
	console.log("Game Initialising");
};


function main()
{
	var myGame = new Game();
	app.myScene = new Scene("Lab 5");

	app.myScene.Start();
	app.myScene.DrawTitle();
	app.myScene.End();
}
