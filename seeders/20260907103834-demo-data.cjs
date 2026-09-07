'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      { name: 'Ryland Grace', email: 'rylandgrace@gmail.com',
        createdAt: now, updatedAt: now },
      { name: 'Colt Seavers', email: 'coltseavers@gmail.com',
        createdAt: now, updatedAt: now },
      { name: 'Court Gentry', email: 'courtgentry@gmail.com',
        createdAt: now, updatedAt: now },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
