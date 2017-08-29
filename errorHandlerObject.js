var Promise = require("bluebird");

module.exports = function () {
    _this = this;
    _this.errors = [];
    _this.setRes = function (res) {
        _this.res = res
    }
    _this.handle = function (err) {
        console.log(err)
        //MUST NOW CHECK TO SEE IF THE PROPERTY IS SPECIFIED
        Promise.map(_this.errors, function (error) {
            if (error.property) {
                if (typeof error.property == 'function') {
                    if (error.property(err)) {
                        _this.res.status(error.code).send(error.returnMessage)
                    }
                } else {

                    var checkee = err;
                    var propertyArray = error.property.split(".")
                    // console.log(propertyArray)
                    Promise.map(propertyArray, function (prop) {
                        if (checkee) {
                            checkee = checkee[prop]
                            return prop;
                        } else {
                            return Promise.reject("not this one")
                        }
                    }).then(function (propertyArray) {
                        if (checkee === error.text) {
                            if (typeof error.returnMessage === 'function') {
                                var calculatedMessage = error.returnMessage(err)
                            }else{
                                var calculatedMessage = error.returnMessage
                            }
                            console.log(`matched ${error.text} with ${error.code}`)
                            _this.res.status(error.code).send(calculatedMessage)
                        }
                    }).catch(function (params) {

                    })
                }
            } else if (err === error.text || err.message === error.text) {
                _this.res.status(error.code).send(error.returnMessage)
                console.log(`matched ${error.text} with ${error.code}`)
            } else {
                console.log("no match found for error:")
                console.log(err)
            }
        })

        _this.res.status(error.code).send(error.returnMessage)


    }
    _this.use = function (code, message, property, returnMessage) {
        if (Object.keys(arguments).length === 3) {
            if (property === null || (typeof property !== 'string') || (typeof property !== 'function')) {
                throw new TypeError("The property parameter must be a string denoting the property that will be inspected")
            }

            _this.errors.push({
                code: code,
                text: message,
                property: property,
                returnMessage: 'something went wrong'
            })
        }
        else if (Object.keys(arguments).length === 4) {
            console.log(typeof property)
            if (property === null || !((typeof property !== 'string') || (typeof property !== 'function'))) {
                throw new TypeError("The property parameter must be a string denoting the property that will be inspected, or a callback function")
            }

            _this.errors.push({
                code: code,
                text: message,
                property: property,
                returnMessage: returnMessage
            })
        } else if (Object.keys(arguments).length === 1) {
            if ((typeof arguments[0]) !== "object") {
                throw new TypeError(`Expected argument of type object. Instead got ${typeof arguments[0]}`)
            }
            if (!("code" in arguments[0]) || !("message" in arguments[0]) || !("property" in arguments[0])) {
                throw new Error("Missing properties in object passed to function constructor")
            }
            _this.errors.push({
                code: arguments[0].code,
                text: arguments[0].message,
                property: arguments[0].property,
                returnMessage: arguments[0].returnMessage || 'something went wrong'
            })
            console.log(arguments[0])

        } else {
            throw new Error("Invalid number of parameters, use expected either 3 or 4 parameters")
        }
    }

}