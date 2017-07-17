var Promise = require("bluebird");
// var res = require("express")().response

module.exports = function () {
    _this = this;
    _this.errors = [];
    _this.setRes = function (res) {
        _this.res = res
    }
    _this.handle = function (err) {
        //MUST NOW CHECK TO SEE IF THE PROPERTY IS SPECIFIED
        Promise.map(_this.errors, function (error) {
            if (error.property) {
                var checkee = err;
                console.log("original:")
                console.log(checkee)
                var propertyArray = error.property.split(".")
                // console.log(propertyArray)
                Promise.map(propertyArray, function (prop) {
                    if (checkee) {
                        checkee = checkee[prop]
                        console.log(checkee)
                        return prop;
                    } else {
                        return Promise.reject("not this one")
                    }
                }).then(function (propertyArray) {
                    console.log("checkee:")
                    console.log(checkee)
                    console.log("text:")
                    console.log(error.text)
                    if (checkee === error.text) {
                        console.log(`matched ${error.text} with ${error.code}`)
                        _this.res.status(error.code).send(`matched ${error.text}`)
                    }
                }).catch(function (params) {
                    
                })
            } else if (err === error.text || err.message === error.text) {
                _this.res.status(error.code).send(`matched ${error.text}`)
                console.log(`matched ${error.text} with ${error.code}`)
            } else {
                console.log("no match found for error:")
                console.log(err)
            }
        })
    }
    _this.use = function (code, message, property) {
        //ADD SUPPORT FOR TAKING IN AN OBJECT WITH ALL CONSTRAINTS PRE_DEFINED
        //is arguments an array?
        if(arguments.length !== 1 || arguments.length !== 3){
            throw new Error("The use function has 2 constructors which either take 1 or 3 parameters")
        }
        
        if (arguments.length === 1 && typeof code === 'object'){

        }
        else if (property === undefined) {

            _this.errors.push({
                code: code,
                text: message
            })
        } else if (property === null || (typeof property !== 'string')) {
            throw new TypeError("The property parameter must be a string denoting the property that will be inspected")
        } else {
            _this.errors.push({
                code: code,
                text: message,
                property: property
            })
        }
    }

}