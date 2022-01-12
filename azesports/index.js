const { constants } = require('buffer')
const express = require('express')
const path = require('path')
const app = express()
 
app.use(express.static('./Public'))

 app.get('/', function (req, response) {
  response.sendFile(path.join(__dirname + '/Public/azesports.html'))
}) 
 
const port = 3000;

app.listen(port, function (){
console.log("Lisenning on port: " + port)
})