var express = require('express');
var parser = require('body-parser');
var Sequelize = require("sequelize");
var connection = new Sequelize("data", 'root', 'root');

var Article = connection.define('article', {
    Title: Sequelize.STRING,
    Release_Date: Sequelize.DATE,
    Director: Sequelize.STRING,

});

var app = express();

app.use(parser.json());
app.set("port", 3000);

var movies = [];

connection.sync().then(function(){




app.get('/api/movies', function(req, res){
    Article.findAll().then(function(articles){
        res.json(articles);
    })

});

app.get('/api/movies/:id', function(req, res){
    // res.json(movies[req.params.id]);
    Article.findById(req.params.id).then(function(article){
        res.json(article.dataValues);
        console.log(article.dataValues);
    });
});

app.delete('/api/movies/:id', function(req, res){
    Article.destroy({where:{id:req.params.id}})
    res.send("successfully deleted movie # "+req.params.id);
});

app.post('/api/movies', function(req, res){

    Article.create(req.body)
    movies.push(JSON.stringify(req.body));
    res.send("successfully created "+ req.body);
});

app.put('/api/movies/:id', function(req, res){
    // console.log(req);
    Article.update(req.body,{
        where: {
            id:req.params.id
        }
    })
    movies[req.params.id] = JSON.stringify(req.body);
    res.send("successfully edited movie # "+ req.params.id);
});


app.listen(app.get("port"), function(){
    console.log("connected")
});

});
