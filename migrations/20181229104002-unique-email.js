'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint ('Users', ['email'], {
      type: 'unique',
      name: 'Unique_email_constraint',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint ('Users', 'Unique_email_constraint');
  },
};
