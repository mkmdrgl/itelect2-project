'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      { name: 'Ryland Grace', email: 'rylandgrace@gmail.com',
        createdAt: now, updatedAt: now },
      { name: 'Colt Seavers', email: 'coltseavers@gmail.com',
        createdAt: now, updatedAt: now },
      { name: 'Court Gentry', email: 'courtgentry@gmail.com',
        createdAt: now, updatedAt: now },
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const idOf = (name) => users.find((u) => u.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Prepare lesson plan', dueDate: now, completed: false,
        userId: idOf('Ryland Grace'), createdAt: now, updatedAt: now },
      { title: 'Exercise at gym', dueDate: now, completed: false,
        userId: idOf('Colt Seavers'), createdAt: now, updatedAt: now },
      { title: 'Review mission plan', dueDate: now, completed: true,
        userId: idOf('Court Gentry'), createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};