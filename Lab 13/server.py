from tornado import websocket, web, ioloop, httpserver
import tornado
import json

connection = {}
session = {}

WAITING_FOR_PLAYERS = 0
GAME_IN_PROGRESS = 1
game_state = WAITING_FOR_PLAYERS

class WSHandler(tornado.websocket.WebSocketHandler):

	def check_origin(self, origin):
		return True
		
	def open(self):
		print("Connection Opened")
		player_address =self.get_player_address()
		print("Player Address: " + player_address)
		connection[player_address] = self

	def send_to_other_player(self, message):
		for key, value in connection.items():
			if (key != self.get_player_address()):
				value.write_message(message)

	def join(self):
		print("Join Function Started")
		if len(session)<2:
			player_address =self.get_player_address()
			session[player_address] = self

		if len(session)==2:
			print("Full Game")
			game_state=GAME_IN_PROGRESS

	def on_close(self):
		pass

	def get_player_address(self):
		return self.request.remote_ip+ ", " + str(self.stream.socket.getpeername()[1])

	def on_message(self, message):
		messageDict = json.loads(message)

		if messageDict["type"] == "join":
			self.join()
			print("Joining in on_method")

		if messageDict["type"] == "updateState":
			self.send_to_other_player(messageDict)
			print("Updating in on_method")


app= tornado.web.Application([
	#map the handler to the URI named "test"
	(r'/wstest', WSHandler),
])

if __name__ == '__main__':
	server_port=8080
	app.listen(server_port)
	ioloop.IOLoop.instance().start()