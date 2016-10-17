var Scene = function(initTitle)
{
this.title = initTitle;
console.log(this.title);
};


Scene.prototype.Start = function(){
	console.log("Scene Started");
};

Scene.prototype.End = function(){
console.log("Scene Ended");
};

Scene.prototype.DrawTitle = function(){
	app.ctx = canvas.getContext("2d");
	app.ctx.font = "48px serif";
	app.ctx.fillText(this.title, 10, 50);
};