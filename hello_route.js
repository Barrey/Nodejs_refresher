const http = require('http')
const fs = require('fs')
const routes = require('./route')

const server = http.createServer(routes)

server.listen('3000', () => {
    console.log("Server is running at 3000")
})