'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('DishOrders', [{
      DishId: 1,
      OrderId: 1,
      portions: 2,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      DishId: 2,
      OrderId: 1,
      portions: 3,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      DishId: 3,
      OrderId: 2,
      portions: 1,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      DishId: 1,
      OrderId: 2,
      portions: 2,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      DishId: 3,
      OrderId: 3,
      portions: 1,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      DishId: 2,
      OrderId: 3,
      portions: 1,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
