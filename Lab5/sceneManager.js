//Scene reference remain undefined
var SceneManager = function()
{
console.log("Scene Manager Created");
this.sceneReference = {};
this.currentScene = {};
};

SceneManager.prototype.addScene = function(newScene){
	this.sceneReference[newScene.title] = newScene;
	console.log("New Scene: " + newScene.title + " added.")
}; 

SceneManager.prototype.goToScene = function(sceneName){
	this.currentScene = this.sceneReference[sceneName];
	this.currentScene.DrawTitle();
};