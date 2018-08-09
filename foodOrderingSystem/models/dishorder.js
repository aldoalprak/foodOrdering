'use strict';
module.exports = (sequelize, DataTypes) => {
  var DishOrder = sequelize.define('DishOrder', {
    DishId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    portions: DataTypes.INTEGER
  }, {});
  DishOrder.associate = function (models) {
    DishOrder.belongsTo(models.Dish, { foreignKey: "DishId" })
    DishOrder.belongsTo(models.Order, { foreignKey: "OrderId" })
  };
  return DishOrder;
};