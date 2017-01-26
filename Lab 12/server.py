from tornado import websocket, web, ioloop, httpserver
import tornado

connection = {}

class WSHandler(tornado.websocket.WebSocketHandler):

	def check_origin(self, origin):
		return True
		
	def open(self):
		print("Connection Opened")
		player_address =self.get_player_address()
		print("Player Address: " + player_address)
		connection[player_address] = self

	def on_message(self, message):
		self.write_message("You said: " + message)
		self.send_to_other_player(message)

	def on_close(self):
		pass

	def get_player_address(self):
		return self.request.remote_ip+ ", " + str(self.stream.socket.getpeername()[1])

	def send_to_other_player(self, message):
		for key, value in connection.items():
			if (key != self.get_player_address()):
				value.write_message("Only first to connect should get this")


app= tornado.web.Application([
	#map the handler to the URI named "test"
	(r'/wstest', WSHandler),
])

if __name__ == '__main__':
	server_port=8080
	app.listen(server_port)
	ioloop.IOLoop.instance().start()