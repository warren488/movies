var express = require('express');
var request = require('request');
var Promise = require('bluebird');
var app = express();
app.set("port", 3000);
var url = "https://api.foursquare.com/v2/venues/explore?ll=41.878114%2C%20-87.629798&v=20161016&client_id=VPA3LUEDIPJ5A2RTRIZTV2P0XJKGCMFGWGL2DMSF1MZOKPE4&client_secret=G32RXWSJ5KFLUVV5TWA1KIVXGMNXDEMGAIMBWAPYOSY4VRKP&llAcc=1.0&limit=2"
var timedate = "http://api.timezonedb.com/v2/get-time-zone?key=GWWUM75FTUVD&format=json&by=zone&zone=America/Chicago"

 var requestAsync = Promise.promisify(request,[{ multiArgs: true}])


// var getVenues = function(uri){
//     return new Promise(function(resolve, reject){
//         request(uri,function(err, req, body){
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(body)
//             }
//         });

//     })
// }

Promise.all([requestAsync(url), requestAsync(timedate)]).spread(function(req1, req2){
    console.log(req2.body)
    console.log(" ")
    console.log(" ")
    console.log(req1.body)
    
}).catch((err) => {
    console.log(err);
})

// requestAsync(url).then(function(req){
//     console.log(req.body);
// },function(err){
//     console.log(err);
// })


app.listen(app.get("port"), function(){
    console.log("connected")
});
