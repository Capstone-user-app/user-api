'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('comments', {
      fields: ['ticket_id'],
      type: 'foreign key',
      name: 'comments_ticket_id_fkey',
      references: {
        table: 'tickets',
        field: 'id',
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('comments', 'comments_ticket_id_fkey')
  }
};
