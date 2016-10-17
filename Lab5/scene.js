var Scene = function(initTitle)
{
	this.Start();
	this.title = initTitle;
	console.log(this.title);
	this.End();
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
	app.ctx.clearRect(0,0,canvas.width, canvas.height);
	app.ctx.fillText(this.title, 10, 50);
};

Scene.prototype.SetCurrent = function(){
	console.log("Set Current Started");
	this.DrawTitle();
};