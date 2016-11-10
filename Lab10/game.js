var Game = function(){
	this.init();
};

Game.prototype.init = function(){
	console.log("Game Initialised");
}

Game.prototype.update = function(){
	console.log("Updated");
	window.requestAnimationFrame(myGame.update);
}