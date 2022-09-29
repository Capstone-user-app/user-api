'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Ticket', [{
      user_email: 'leia@organa.al',
      title: 'Help me, Obi-Wan Kenobi. You\'re my only hope.',
      description: 'General Kenobi. Years ago you served my father in the Clone Wars. Now he begs you to help him in his struggle against the Empire. I regret that I am unable to present my father\'s request to you in person, but my ship has fallen under attack, and I\'m afraid my mission to bring you to Alderaan has failed. I have placed information vital to the survival of the Rebellion into the memory systems of this R2 unit. My father will know how to retrieve it. You must see this droid safely delivered to him on Alderaan. This is our most desperate hour. Help me, Obi-Wan Kenobi. You\'re my only hope.',
      publication_date: new Date('1977-05-25T03:24:00'),
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    const limit = new Date('2000-01-01T00:00:00')
    const { lt } = Sequelize.Op
    return queryInterface.bulkDelete('Ticket', {publication_date: {[lt]: limit}}, {});
  }
};
