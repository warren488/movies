var express = require('express');
var request = require('request');
var Promise = require('bluebird');
var parser = require('body-parser');

var app = express();
app.set("port", 3000);
app.use(parser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  console.log("ENTERED!!")
  res.status(500).send('Something broke!');
})



var venues = "https://api.foursquare.com/v2/venues/explore?ll=41.878114%2C%20-87.629798&v=20161016&client_id=VPA3LUEDIPJ5A2RTRIZTV2P0XJKGCMFGWGL2DMSF1MZOKPE4&client_secret=G32RXWSJ5KFLUVV5TWA1KIVXGMNXDEMGAIMBWAPYOSY4VRKP&llAcc=1.0&limit=2"
var timedate = "http://api.timezonedb.com/v2/get-time-zone?key=GWWUM75FTUVD&format=json&by=zone&zone=America/Chicago"
// var weather = "api.openweathermap.org/data/2.5/weather?q=London&APPID=795a7ddcaf1e3dab256594234760acdd";


//  var requestAsync = Promise.promisify(request,[{ multiArgs: true}])


var getVenues = function(uri){
    return new Promise(function(resolve, reject){
        request(uri,function(err, req, body){
            if(err){
                reject(err);
            }else{
                resolve(body)
            }
        });

    })
}


getVenues(venues).then(function(body){
    // console.log(body);
},function(err){
    // console.log(err);
})

//weather api not working in node for reason
app.get("/combination", function(req, res){
    Promise.all([getVenues(venues),/*getVenues(weather),*/ getVenues(timedate)])
        .spread(function(venuesres,/* weatherres, */timedateres ){


        var combo = {
            venues: JSON.parse(venuesres),
            // weather: weatherres.body,
            timedate: JSON.parse(timedateres)
        }

        res.json(combo)


    }).catch((err) => {
        console.log(err);
    })

});


app.listen(app.get("port"), function(){
    console.log("connected")
});
