const fs = require('fs')
const url = require('url')

const renderHtml = (htmlPath, response) => {
    fs.readFile(htmlPath, (error, data) => {
        if (error){
            response.write(htmlPath + " not found")
        } else {
            response.setHeader("Content-Type", "text/html")
            response.write(data)
        }
        
        response.end()
    })
}

const requestHandler = (req, res) => {
    const urlPath = url.parse(req.url).path
    
    switch (urlPath) {
        case '/':
            renderHtml('./index.html', res)
            break;
        case '/login':
            renderHtml('./login.html', res)
            break;
        default:
            renderHtml('./404.html',  res)
            break;
    }

    // don't separate response.end() from response.write() instead combine in 1 function
    // res.end()
}

//because there is only one function that should be exported, so you can just assign module.exports to the function's name
module.exports = requestHandler