'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const admin = await bcrypt.hash('admin123', 10);
    const member = await bcrypt.hash('member123', 10);

    await queryInterface.bulkInsert('Users', [
      { email: 'rylandgrace@gmail.com', password: admin, role: 'admin',
        createdAt: now, updatedAt: now },
      { email: 'coltseavers@gmail.com', password: member, role: 'member',
        createdAt: now, updatedAt: now },
      { email: 'courtgentry@gmail.com', password: member, role: 'member',
        createdAt: now, updatedAt: now },
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, email FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const idOf = (email) => users.find((u) => u.email === email).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'Prepare lesson plan', dueDate: now, completed: false,
        userId: idOf('rylandgrace@gmail.com'), createdAt: now, updatedAt: now },
      { title: 'Exercise at gym', dueDate: now, completed: false,
        userId: idOf('coltseavers@gmail.com'), createdAt: now, updatedAt: now },
      { title: 'Review mission plan', dueDate: now, completed: true,
        userId: idOf('courtgentry@gmail.com'), createdAt: now, updatedAt: now },
    ]);
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};