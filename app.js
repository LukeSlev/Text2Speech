var express = require('express'), 
    app = express(),
    body_parser = require("body-parser")
    

app.get('/', function(req, response){
    response.send('hello');
})

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Service started.");
})
    