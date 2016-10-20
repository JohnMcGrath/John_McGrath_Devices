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

	myScene1 = new Scene("Scene1");
	myScene2 = new Scene("Scene2");
	myScene3 = new Scene("Scene3");

	myManager = new SceneManager();

	myManager.addScene(myScene1);
	myManager.addScene(myScene2);
	myManager.addScene(myScene3);

	myManager.goToScene("Scene3");
}
