from tornado import websocket, web, ioloop, httpserver
import tornado

connection = {}

class WSHandler(tornado.websocket.WebSocketHandler):

	def check_origin(self, origin):
		return True
		
	def open(self):
		print("Connection Opened")
		first_address = self.request.remote_ip + str(self.stream.socket.getpeername()[1])
		print("First Address: " + first_address)
		connection[first_address] = self

	def on_message(self, message):
		self.write_message("You said: " + message)
		second_address = self.request.remote_ip + str(self.stream.socket.getpeername()[1])
		print("Second Address " + second_address)

	def on_close(self):
		pass

app= tornado.web.Application([
	#map the handler to the URI named "test"
	(r'/wstest', WSHandler),
])

if __name__ == '__main__':
	server_port=8080
	app.listen(server_port)
	ioloop.IOLoop.instance().start()