var Promise = require("bluebird")
    var errorHandler = function (statuscode, status, message ) {
        return function (e) {

            console.log({
                status: status || "error",
                message: message|| e['message'] || e
            });
        }
    }

justDo = new Promise(function(resolve, reject){
    reject({
        mesdsage: "Problems!"
    });
});

justDo.catch(errorHandler(450,"specialError", "a special error has occured"))

