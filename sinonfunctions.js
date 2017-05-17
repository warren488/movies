var https = require("https");

    function fwcb(cb){
        cb();
    }

    module.exports = {

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
                    // callback(person);
                    
                    fwcb(function(person, param){
                        console.log(`called with ${param}`);
                    })
                })

            })

        }

    }