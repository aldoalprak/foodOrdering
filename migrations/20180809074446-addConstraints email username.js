'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    try {
      await queryInterface.addConstraint(
        'Customers',
        ['email'],
        {
          type: "unique",
          name: "unique email"
        }
      )
  
      await queryInterface.addConstraint(
        'Customers',
        ['username'],
        {
          type: "unique",
          name: "unique username"
        }
      )
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
   
    
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
