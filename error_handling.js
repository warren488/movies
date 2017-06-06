var express = require('express');
var app = express();
app.set("port", 3000);
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.get("/test", function(req, res){
    throw new Error("test");
    // res.status(500)
    //     .send("testing the response codes along with error handling")
})

app.listen(app.get("port"), function(){
    console.log("connected")
});