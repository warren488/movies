var express = require('express');
var parser = require('body-parser');
var Sequelize = require("sequelize");
var request = require("request")
var xoauth2 = require("xoauth2");
var connection = new Sequelize("data", 'root', 'root');

var nodemailer = require('nodemailer');

var Article = connection.define('article', {
    Title: Sequelize.STRING,
    Release_Date: Sequelize.DATE,
    Director: Sequelize.STRING,

});
var app = express();

app.use(parser.json());
app.set("port", 3000);

var movies = [];

connection.sync().then(function () {

    app.post('/sendmail', function (req, res) {



        // create reusable transporter object using the default SMTP transport
        // let transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 465,
        //     secure: true, // true for 465, false for other ports
        //     auth: {
        //         user: "warren.s.488@gmail.com",
        //         pass: ""
        //     }
        // });


        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: 'OAuth2',
                user: "warren.scantlebury@hyuna.bb",
                clientId: '493919006804-je1sh823qrjq7c7g3p20hcn2t1te61a2.apps.googleusercontent.com',
                clientSecret: 'OBVptF3h-YKDBj7dpIBuiBvz',
                refreshToken: '1/uuUxifuwRri5lOq_5SeNL50gw4tG2EVzdPIq-KwoCEM',
                accessToken: 'ya29.Glu2BGdIuak0vDX05_gzbpbnrG48RePCgvw-p6qKMQQcTO0UGpgaJmQGHvGD8DOU4DTrFixGqJWFdSINItBzKt4hDKPrEeqRfUHYMBO4sJKpMyzdJVYeqCYwV8L7'
            }
        })

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Warren" <warren.scantlebury@hyuna.bb>', // sender address
            to: 'warren.scantlebury@hyuna.bb,dario.thornhill@hyuna.bb', // list of receivers
            subject: 'Gateway test(different sender)', // Subject line
            text: 'Sent from nodemailer(different sender)', // plain text body
            html: '<b>Sent from nodemailer(different sender)</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.send(error)
                return console.log(error);
            }
            res.send(info)
        });

    })

    app.post('/testReq', function (req, res) {
        var emailPayload = {
            recipients: ["warren.scantlebury@hyuna.bb", "warren.s.488@gmail.com"],
            sender_email: "support@geeker.com",

            email_subject: "From production",
            sender_name: "Contact Us Form",
            template_data: {
                $customer_name: "requestBody.customerName",
                $customer_email: "requestBody.customerEmail",
                $message: "requestBody.message"
            },
            requested_from: "customer support",
            template_name: "contact_us",
            template_variation: "dsite"
        }
        console.log(emailPayload)
        request.get("localhost:1000/", function (err, response, body) {
            console.log(body, response)
            res.send(body)
        })
        //   .json(emailPayload)
    })


    app.get('/api/movies', function (req, res) {
        Article.findAll().then(function (articles) {
            res.json(articles);
        })

    });

    app.get('/api/movies/:id', function (req, res) {
        // res.json(movies[req.params.id]);
        Article.findById(req.params.id).then(function (article) {
            res.json(article.dataValues);
            console.log(article.dataValues);
        });
    });

    app.delete('/api/movies/:id', function (req, res) {
        Article.destroy({ where: { id: req.params.id } })
        res.send("successfully deleted movie # " + req.params.id);
    });

    app.post('/api/movies', function (req, res) {

        Article.create(req.body)
        movies.push(JSON.stringify(req.body));
        res.send("successfully created " + req.body);
    });

    app.put('/api/movies/:id', function (req, res) {
        // console.log(req);
        Article.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        movies[req.params.id] = JSON.stringify(req.body);
        res.send("successfully edited movie # " + req.params.id);
    });


    app.listen(app.get("port"), function () {
        console.log("connected")
    });

});
