var Sequelize = require("sequelize");

var connection = new Sequelize("emailAPI",
    "root",
    "root", {
        logging: false
    });

exports.emailDraft = require('./email_drafts')(connection, Sequelize)
exports.emailRequest = require('./email_requests')(connection, Sequelize)
exports.emailTemplate = require('./email_templates')(connection, Sequelize)