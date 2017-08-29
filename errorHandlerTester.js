var handler = require("./Test-Services/error")

require("./errorHandlerMiddleware")

var express = require('express');
var app = express();
app.set("port", 3001);



app.listen(app.get("port"), function () {
    console.log("connected")
}); 
app.all("/", function (req, res) {
    handler.setRes(res)
    handler.handle({
        "new": {
            "property": "test"
        }
    })
    // handler.handle(3434)
    // handler.handle({
    //     "code": "EONF"
    // })
    // handler.handle({
    //     "message": {
    //         "warren": {
    //             "more": "test"
    //         }
    //     }
    // })

})