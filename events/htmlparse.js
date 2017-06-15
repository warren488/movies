var parse5 = require("parse5");
var fs = require("fs");
var filename = 'media_membership (1)'

var file = fs.readFile(`${__dirname}/${filename}.ejs` ,"utf8",function(err, data){
    if(err) console.log(err)
    console.log(data)
    fs.appendFile(`${__dirname}/${filename}serialized.txt`, data , "utf8")
    fs.appendFile(`${__dirname}/${filename}serialized.txt`, "\n\n\n\nstopped\n\n\n\n\n\n\n\n" , "utf8")
});

console.log(file)
var parsed = parse5.parse('<h1 style="color:red" fool>gaza</h1>');
var nonparsed =  parse5.serialize(parsed)
// fs.writeFileSync(`${__dirname}/${filename}serialized.txt`, nonparsed , "utf8")

