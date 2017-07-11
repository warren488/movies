/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_templates', {
    template_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    template_variation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    template_string: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    variables: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'email_templates'
  });
};
