const http = require('http')
const modules = require('./module_1')

const server = http.createServer( (req, res) => {
    if (req.url === '/'){
        modules.test();
        modules.test2("hi");
        modules.test3("test");
    }

    res.write("<h1>Welcome</h1>")
    res.end()
})

server.listen('3000', () => {
    console.log("Server listening on port 3000")
})
