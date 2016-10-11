//Alerts are used to quickly tell what was loaded/used
console.log("Squares.js Loaded");

	var ctx;
	var canvas;

	//create the document
	canvas = document.createElement("canvas");
	document.body.appendChild(canvas);

	//set the canvas size
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;


//Function used to create a square
function Square(x,y,colour){

	this.m_x = x;
	this.m_y = y;
	this.m_colour = colour;

	console.log("Square Function in Square.js Called");
	app.ctx = canvas.getContext("2d");
	app.ctx.fillStyle = this.m_colour;
	app.ctx.fillRect(this.m_x,this.m_y,100,100);
	app.ctx.stroke();
}