var http = require("http")

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	})
	res.end('hello world')
}).listen(8000)

console.log('服务器运行再8000端口')