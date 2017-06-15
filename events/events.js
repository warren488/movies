var eventEmitter = require("events").EventEmitter
var util = require("util")

var Person = function(name) {
    this.name = name
}

util.inherits(Person, eventEmitter)
Person.prototype.on("speak", function (message) {
        console.log(`${this.name}: ${message}`)
    })
var warren = new Person("Warren Scantlebury")

var Jim = new Person("Jim Jones")
warren.emit("speak", "I am talking")
Jim.emit("speak", "gagagagaga")
warren.on("laugh" ,function(laugh){
    console.log(laugh)
})
warren.emit("laugh", "hehehe")
console.log(warren)