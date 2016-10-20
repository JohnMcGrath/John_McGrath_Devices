var Scene = function(initTitle)
{
	this.title = initTitle;
	this.Start();
	this.End();
};

Scene.prototype.Start = function(){
	console.log(this.title + " Started");
};

Scene.prototype.End = function(){
console.log(this.title + " Ended");
};

Scene.prototype.DrawTitle = function(){
	app.ctx = canvas.getContext("2d");
	app.ctx.font = "48px serif";
	app.ctx.clearRect(0,0,canvas.width, canvas.height);
	app.ctx.fillText(this.title, 10, 50);
};

Scene.prototype.SetCurrent = function(){
	console.log(this.title + " Set as Current");
	this.DrawTitle();
};