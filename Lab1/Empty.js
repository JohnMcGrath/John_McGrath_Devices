
function main()
{
	console.log("Hello world");

	//create the variables
	var ctx;
	var canvas;


	//create the document
	canvas = document.createElement("canvas");
	document.body.appendChild(canvas);

	//set the canvas size
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	/*ctx = canvas.getContext("2d");

	ctx.fillStyle = rgb(255,255,0);

	ctx.fillRect(0,0,100,100);
	ctx.stroke();*/

//do the random fuction
	Math.random();
for (var i =0; i< 200;i++)
	{
		ctx = canvas.getContext("2d");
		ctx.fillStyle = rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
		ctx.fillRect(Math.random() * canvas.width,Math.random() * canvas.height,Math.random() * 100,Math.random() *100);
		ctx.stroke();
	}
	
}



/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}