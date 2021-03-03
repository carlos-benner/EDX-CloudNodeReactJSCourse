const express = require('express')

const app = express()
const port = 3000
app.get('/temperature/:location_code', function(request,response){
    const location = request.params.location_code
    //call to external API to get temp data for location
    response.end(`Hola ${location}`)
})

var server = app.listen(port,function(){
    console.log(`Listening on URL http://localhost:${port}`)
})
