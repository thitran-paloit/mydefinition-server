'use strict';
const { sequelizeModelToJSON } = require('../helpers/string');

module.exports = (sequelize, DataTypes) => {
  const Definition = sequelize.define('Definition', {
    name: DataTypes.STRING,
    definition: DataTypes.TEXT,
    lastCheckedAt: DataTypes.DATE,
    counter: DataTypes.INTEGER
  }, {
      timestamps: true,
      underscored: true,
      toJSON: function() {
        return {};
      }
    });
  Definition.associate = function (models) {
    // associations can be defined here
  };

  Definition.prototype.toJSON = function() {
    return sequelizeModelToJSON(this.get());
  }

  return Definition;
};