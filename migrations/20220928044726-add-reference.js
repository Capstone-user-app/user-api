'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Comment', {
      fields: ['ticket_id'],
      type: 'foreign key',
      name: 'Comment_ticket_id_fkey',
      references: {
        table: 'Ticket',
        field: 'id',
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Comment', 'Comment_ticket_id_fkey')
  }
};
