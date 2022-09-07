const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
	if (req.url == "/data" && req.method == "POST") {
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk)
		})

		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString()
			fs.appendFile('output.txt', parsedBody.split('=')[1] + '\r\n', (err) => {
				if (err) {
					//throw err; //will throw error and stop the event loop just like process.exit()
					console.log(err);
				}
			})

			res.statusCode = 302 //it's important to set statusCode to 302 to redirect user
			res.setHeader('Location', '/')
			return res.end()
		})

		
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html><head><title>My Page</title></head>');
	res.write('<form method="post" action="/data">');
	res.write('<input type="text" name="message"><button type="submit">Submit</button>');
	res.write('</form>');
	res.write('<h1>Hey yo! you wanna go to ' + req.url + '?');
	return res.end();
});

server.listen(3000, () => {
	console.log("Server is running on port 3000")
})