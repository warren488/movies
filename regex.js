var fs = require("fs");
var file = "trial_base(d-site).ejs";
var file = "bb-play.ejs";
var cluster = require('cluster');
var plain = /<%=\s*[a-z_]{1,}\s*%>/g;
// var hidden = /<%\s*[A-Za-z_$()&\s]*\s*%>/g;
var hidden = /<%.{1,}\$.{1,} %>/g;



// str = `<%= domain_name %>
//     wewfwefwefwefwefwef
//     wefwefwefwf
//     <%= domer %>
//     dfv
//     <% for($peeps > 77 &&;fg  $fam || $shows) %>
//     fsddd
//     <%= dofsd
//     swesd
//     sdsdsds <% if($ersd && $cars || $sheep) %> sd s dsdfsb gf gftd bg
//     `;
var str;
fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  str = data;
//   console.log(data);


myarr = str.match(plain);
console.log(myarr);
variables = [];


myarr.forEach(function(element) {
    element = element.substring(3,element.length);
    element = element.substring(0,element.length-2);
    element = element.trim();

    if(variables.indexOf(element) != 1)
    variables.push(element);
});




console.log(variables);

myarr2 = str.match(hidden);
console.log(myarr2)
variables2 = [];

var hidden2 = /\$[A-Za-z_$0-9]{1,}/g;
if(!myarr2)
return;

myarr2.forEach(function(element) {
    //CHECK FOR DUPLICATES!!!!!!
    element = element.match(hidden2)
    variables2 = variables2.concat(element);
});

variables = variables.concat(variables2)
console.log(variables);



});