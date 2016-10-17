var sceneReference = [];

var SceneManager = function(params)
{
console.log("Scene Manager Created");
sceneReference = params;

for(i=0;i<sceneReference.length;i++){
	console.log(sceneReference[i].title);
}

};

SceneManager.prototype.addScene = function(newScene){
	app.sceneReference += newScene;
	console.log("New Scene: " + newScene.title + " added.")
}; 

SceneManager.prototype.goToScene = function(sceneNum){
	console.log(app.sceneReference[sceneNum].title);
};