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

    return queryInterface.bulkInsert('Dishes', [{
      description: 'lasagna',
      image: "https://i2.wp.com/cafedelites.com/wp-content/uploads/2018/01/Mamas-Best-Lasagna-IMAGE-43.jpg?fit=1600%2C2400&ssl=1",
      price: 25000,
      duration: 5,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      description: 'spagheti',
      image: "https://media-cdn.tripadvisor.com/media/photo-s/09/1c/47/af/bencoolen-coffee-house.jpg",
      price: 35000,
      duration: 10,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      description: 'pizza',
      image: "https://images.firstwefeast.com/complex/images/fl_lossy,q_auto/v1/xh7g5sgtximbqev3plah/pizza-hut-vs-dominos",
      price: 75000,
      duration: 15,
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
