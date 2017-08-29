/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_requests', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sender_email: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    requested_from: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    template_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sender_domain: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    sender_name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    email_subject: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    recipients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    template_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'email_requests'
  });
};
