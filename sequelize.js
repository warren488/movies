
var Sequelize = require("sequelize");

var connection = new Sequelize("data", 'root', 'root');

var Article = connection.define('article', {
    Title: Sequelize.STRING,
    Release_Date: Sequelize.DATE,
    Director: Sequelize.STRING,
     
});

connection.sync();