'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dish = sequelize.define('Dish', {
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    duration: DataTypes.INTEGER
  }, {});
  Dish.associate = function (models) {
    Dish.belongsToMany(models.Order, { through: "DishOrder", foreignKey: "DishId" })
  };
  return Dish;
};