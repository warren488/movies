var fs = require("fs");
var request = require("request");
var payload;
filename = "trial_geeker"







var writable = fs.createWriteStream("./" + filename + "_stringified.txt");
var readable = fs.createReadStream(filename + ".ejs", { encoding: "utf8" })

readable.on("data", function (chunk) {


    writable.write(JSON.stringify(chunk));
})







fs.readFileSync(filename + ".ejs", "utf8", function (err, data) {

    if (err) console.log(err);
    var html = JSON.stringify(data);
    console.log(html);
    payload = {
        html: html,
        name: "new",
        variation: "email"
    }
    // console.log(html);


    // request.post('http://localhost:8822/api/emails/upload').json(payload)
    //     .on('response', function (response) {
    //         // console.log(response) // 200 
    //         // console.log(response.headers['content-type'])
    //     })

});





