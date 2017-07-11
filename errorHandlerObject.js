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
                var propertyArray = property.split(".")
                Promise.map(propertyArray, function (prop) {
                    if (checkee) {
                        checkee = checkee[prop]
                        return prop;
                    } else {
                        return Promise.reject()
                    }
                }).then(function (propertyArray) {
                    if (checkee === err.text) {
                        _this.res.status(error.code).send(`matched ${error.text}`)
                        console.log(`matched ${error.text} with ${error.code}`)
                    }
                })
            } else if (err === error.text || err.message === error.text) {
                _this.res.status(error.code).send(`matched ${error.text}`)
                console.log(`matched ${error.text} with ${error.code}`)
            } else {
                console.log("nothing found")
            }
        })
    }
    _this.use = function (code, message, property) {
        if (property === undefined) {

            _this.errors.push({
                code: code,
                text: message
            })
        } else if (property === null || (typeof property !== 'string')) {
            throw new TypeError("The property parameter must be a string denoting the property to inspect")
        } else {
            _this.errors.push({
                code: code,
                text: message,
                property: property
            })
        }
    }

}