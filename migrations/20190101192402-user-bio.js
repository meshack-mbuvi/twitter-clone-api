'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn ('Users', 'bio', {
      type: Sequelize.STRING (80),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn ('Users', 'bio');
  },
};
