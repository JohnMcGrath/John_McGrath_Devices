console.log("RefactoredSquares.js Loaded");
app={};

function main()
{
    app.xPos = 100;
    app.yPos = 100;

    app.ctx;

    //create the document
    app.canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    //set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

	console.log("Main Called in RefactoredSquares.js");
	console.log("Hello world");

//do the random fuction
	Math.random();

	app.s = new Square(app.xPos,app.yPos,rgb(0, 150, 150));
	
}


document.addEventListener('keydown', function(event) {
 app.ctx.clearRect(0,0,canvas.width, canvas.height);

    if(event.keyCode == 37) {
        console.log('Left was pressed');
        app.xPos -= 50;
    }
    else if(event.keyCode == 38) {
         console.log('Up was pressed');
         app.yPos -= 50;
    }
    if(event.keyCode == 39) {
         console.log('Right was pressed');
         app.xPos += 50;
    }
    else if(event.keyCode == 40) {
         console.log('Down was pressed');
         app.yPos += 50;
    }

    app.s = new Square(xPos,yPos,rgb(0, 150, 150));
});


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