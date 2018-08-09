'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chef = sequelize.define('Chef', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Chef.associate = function(models) {
    // associations can be defined here
  };
  return Chef;
};