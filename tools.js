var https = require("https");
var people = require("./people.json");

module.exports = {

    testFunc(){
        return "string"
    },

    fwcb(callback){

        callback();

    },



    httpTest(person, callback){

        var url = 'https://www.google.com';

        https.get(url, function(res){
            res.setEncoding("UTF-8")
            var body = "";

            res.on("data", function(chunk){
                body += chunk;
            });

            res.on("end", function(){
                callback(body);
                fwcb(function(param){
                    console.log(`called with ${param}`);
                })
            })

        })

    },

    getPeople(){
        people.forEach(function(element) {
            console.log(`${element.first} ${element.last}`);
        });
    }
}