var Handler = require("./errorHandlerObject")
var handler = new Handler()

var express = require('express');
var app = express();
app.set("port", 3000);



app.listen(app.get("port"), function () {
    console.log("connected")
});
app.all("/", function (req, res) {
    handler.setRes(res)
    handler.use(500, "EONF", "code")
    handler.use(200, "test", "message.warren.more")
    handler.handle({
        "code": "EONF"
    })
    handler.handle({
        "message": {
            "warren": {
                "more": "test"
            }
        }
    })
    handler.handle({})

})