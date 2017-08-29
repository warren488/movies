/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_drafts', {
    generated_email_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sender_domain: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    send_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    recipient: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    request_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'email_drafts'
  });
};
