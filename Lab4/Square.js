//Function used to create a square


//Alerts are used to quickly tell what was loaded/used
console.log("Squares.js Loaded");

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