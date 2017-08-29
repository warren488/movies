var express = require('express');
var parser = require('body-parser');
var Sequelize = require("sequelize");
var connection = new Sequelize("data", 'root', 'payssoonn');
var jwt = require("jsonwebtoken");
var express_jwt = require("express-jwt");

var app = express();

app.use(parser.json());
app.set("port", 3000);

connection.sync().then(function(){

    app.get("/auth", function(req, res){
        jwt.sign({
            sub:"auth test",
            aud:"geeker.com",
            iss:"site generator"
        },"secret",
        { algorithm: 'HS256' },
        function(err, token){

            if(err){

            res.statusCode = 401;
            res.send(`${err}`)

            }else{
                res.send(token)
            }
        })
    })

    app.get("/checkauth",express_jwt({
        secret:"secret",
        audience:"people"
    }), function(req, res){
        var token = req.get("authorization");
        jwt.verify(token, "secret", function(err, decoded){
            console.log(decoded);
            res.send(decoded);
        })
    })

    app.listen(app.get("port"), function(){
        console.log("connected")
    });

});
