console.log("RefactoredSquares.js Loaded");

var xPos = 100;
var yPos = 100;

app={};

function main()
{


	console.log("Main Called in RefactoredSquares.js");
	console.log("Hello world");

//do the random fuction
	Math.random();

	var s = new Square(xPos,yPos,rgb(0, 150, 150));
	
}


document.addEventListener('keydown', function(event) {
 ctx.clearRect(0,0,canvas.width, canvas.height);

    if(event.keyCode == 37) {
        console.log('Left was pressed');
        xPos -= 50;
    }
    else if(event.keyCode == 38) {
         console.log('Up was pressed');
         yPos -= 50;
    }
    if(event.keyCode == 39) {
         console.log('Right was pressed');
         xPos += 50;
    }
    else if(event.keyCode == 40) {
         console.log('Down was pressed');
         yPos += 50;
    }

    var s = new Square(xPos,yPos,rgb(0, 150, 150));
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