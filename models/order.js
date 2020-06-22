'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    CustomerId: DataTypes.INTEGER
  }, {});
  Order.associate = function (models) {
    Order.belongsToMany(models.Dish, { through: "DishOrder", foreignKey: "OrderId" })
  };
  return Order;
};