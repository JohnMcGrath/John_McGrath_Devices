//Function used to create a square


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



function Square(x,y,colour){

this.m_x = x;
this.m_y = y;
this.m_colour = colour;

	console.log("Square Function in Square.js Called");
		ctx = canvas.getContext("2d");
		ctx.fillStyle = this.m_colour;

		ctx.fillRect(this.m_x,this.m_y,100,100);
		//ctx.fillRect(this.m_x,this.m_y,Math.random() * 100,Math.random() *100);
		ctx.stroke();
}