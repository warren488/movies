var express = require('express');
var parser = require('body-parser');

var app = express();

app.use(parser.json());
app.set("port", 3000);

var movies = [];


app.get('/api/movies', function(req, res){
    res.json(movies[0]);
});

app.post('/api/movies', function(req, res){
    // console.log(req);
    movies.push(JSON.stringify(req.body));
    res.send("successfully received "+ req.body);
});


app.listen(app.get("port"), function(){
    console.log("connected")
});