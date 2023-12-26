const express = require('express')
const app = express()
const PORT = 3000


app.get('/',(request,response) =>{
    response.sendFile(__dirname + '/index2.html')
})






app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT} better go catch it`)
})