const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        fs.readFile('./index.html', (err, data) => {
            if (err){
                res.setHeader("Content-Type", "text/html")
                res.statusCode = 404;
                res.write("<b>html not found</b>")
            } else {
                res.write(data)
            }

            return res.end();
        })
    }
})

server.listen('3000', () => {
    console.log("Server is listening on port 3000")
})