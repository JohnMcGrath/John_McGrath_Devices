from tornado import websocket, web, ioloop, httpserver
import tornado
import json

connection = {}
session = {}

WAITING_FOR_PLAYERS = 0
GAME_IN_PROGRESS = 1

class WSHandler(tornado.websocket.WebSocketHandler):

	def check_origin(self, origin):
		return True
		
	def open(self):
		print("Connection Opened")
		player_address =self.get_player_address()
		print("Player Address: " + player_address)
		connection[player_address] = self

	def on_message(self, message):
		self.write_message(message)
		self.send_to_other_player(message)
		print('********************', message)

		messageDict = json.loads(message)
		print(messageDict)

		if messageDict["type"] == "join":
			print("PLAYER 2 HAS JOINED")

		if messageDict["type"] == "updateState":
			self.send_to_other_player(messageDict)

	def send_to_other_player(self, message):
		for key, value in connection.items():
			if (key != self.get_player_address()):
				value.write_message(message)

	def on_close(self):
		pass

	def get_player_address(self):
		return self.request.remote_ip+ ", " + str(self.stream.socket.getpeername()[1])




app= tornado.web.Application([
	#map the handler to the URI named "test"
	(r'/wstest', WSHandler),
])

if __name__ == '__main__':
	server_port=8080
	app.listen(server_port)
	ioloop.IOLoop.instance().start()