var Handler = require("./errorHandlerObject")
var handler = new Handler()

var express = require('express');
var app = express();
app.set("port", 3000);



app.listen(app.get("port"), function(){
    console.log("connected")
});
app.all("/", function(req, res){
    handler.setRes(res)
    handler.use(200, "warren", "message")
    handler.handle("warren")
    handler.handle({})

})