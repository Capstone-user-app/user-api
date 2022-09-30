'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('comments', [{
      user_email: 'leia@organa.al',
      content: 'In this vast lands I need some help to solve a awful problem',
      publication_date: new Date(),
      ticket_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments');
  }
};
