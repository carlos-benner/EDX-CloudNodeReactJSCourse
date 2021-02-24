let http = require('http')

const server = http.createServer((request, response)=>{
    response.writeHead(200)
    response.end('Wena')
    

})

const port = 8080
server.listen(port)
console.log(`server started on port ${port}`)

// http://localhost:8080