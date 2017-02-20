var ws = new WebSocket("ws://localhost:8080/wstest");

updateState = function(){
	var cursorX = event.clientX;     // Get the horizontal coordinate
	var cursorY = event.clientY;     // Get the vertical coordinate
	var updateState = {};
	updateState.type = "updateState"
	updateState.data = {x:cursorX,  y:cursorY};

	var  updateMessage = JSON.stringify(updateState);
	ws.send(updateMessage);
};

myJoin = function(){
	var message = {}
	message.type = "join";
	message.data = "";
	var joinMessage = JSON.stringify(message);
	ws.send(joinMessage);
};

document.onclick = function(){
	var joinButton = document.getElementById("join");
	joinButton.addEventListener("click", join);
	updateState();
};

document.getElementById("join").onclick = function(){
	myJoin();
}

ws.onopen = function() {
};


//called when the client receives a message
ws.onmessage = function(evt) {
	if (evt.type == "updateState"){
		var jsonObject = JSON.parse(evt.data);
	}
	if (evt.type == "join"){
		var jsonObject = JSON.parse(evt.data);
	}
};