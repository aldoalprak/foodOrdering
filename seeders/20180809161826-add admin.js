'use strict';
const bcrypt = require('bcrypt')
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

    let hash = bcrypt.hashSync("helloworld123", 10)
    return queryInterface.bulkInsert('Admins', [{
      email: 'admin@mail.com',
      password: hash,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      email: 'admin2@mail.com',
      password: hash,
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
