'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addConstraint(
      'Customers',
      ['email'],
      {
        type: "unique",
        name: "unique email"
      }
    )

    queryInterface.addConstraint(
      'Customers',
      ['username'],
      {
        type: "unique",
        name: "unique username"
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
