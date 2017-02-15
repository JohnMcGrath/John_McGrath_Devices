var ws = new WebSocket("ws://localhost:8080/wstest");

updateState = function(){
	var cursorX = event.clientX;     // Get the horizontal coordinate
	var cursorY = event.clientY;     // Get the vertical coordinate
	console.log(cursorX);
	console.log(cursorY);
	var updateState = {};
	updateState.type = "updateState"
	updateState.data = {x:cursorX,  y:cursorY};

	var  updateMessage = JSON.stringify(updateState);
	console.log(updateMessage);
	ws.send(updateMessage);
};

myJoin = function(){
	var message = {}
	message.type = "join";
	message.date = "";
	var joinMessage = JSON.stringify(message);
	ws.send(joinMessage);
};


document.onclick = function(){
	var joinButton = document.getElementById("join");
	joinButton.addEventListener("click", join);
	myJoin();
	updateState();
}

ws.onopen = function() {
    var objMessage = {};
	objMessage.type = "test";
	objMessage.data = "hello";

	

	var jsonMessage = JSON.stringify(objMessage);
	ws.send(jsonMessage);
	updateState();
};


//called when the client receives a message
ws.onmessage = function(evt) {
	if (evt.type == "updateState"){
		console.log(evt.data);
		var jsonObject = JSON.parse(evt.data);
		console.log(jsonObject);
	}
	if (evt.type == "join"){
		console.log("JOINING PLAYER");
	}
};