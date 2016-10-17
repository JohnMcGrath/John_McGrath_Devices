//Global Variable
app={};

var ctx;
var canvas;
var x = [];
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

	app.myScene1 = new Scene("Scene1");
	app.myScene2 = new Scene("Scene2");
	app.myScene3 = new Scene("Scene3");

	x = [app.myScene1,app.myScene2,app.myScene3];
	app.myManager = new SceneManager(x);

	app.myScene4 = new Scene("Scene4");
	app.myManager.addScene(app.myScene4);

	app.myManager.goToScene(1);
}
