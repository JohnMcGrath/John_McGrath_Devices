function main(){
	//Setup and initialise SoundManager
	var soundManager = new SoundManager();
	soundManager.init();

	//load sound - give it a name and give the path to the sound files
	soundManager.loadSoundFile('sound', "sound.mp3");
  
	//NB: if you play a sound before it has finished loading, it won’t play...
	soundManager.playSound('sound');
}