'use strict';
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Credentials', [
      {
        appName: 'github',
        accessToken: '',
        refreshToken: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {}),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Credentials', null, {});
  }
};