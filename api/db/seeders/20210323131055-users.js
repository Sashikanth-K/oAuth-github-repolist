'use strict';
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        username: 'johndoe',
        password: 'dontstorepasswordsthisway',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'janedoe',
        password: 'youreallyshouldhashpasswords',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'ritadoe',
        password: 'outofpasswordideas',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};