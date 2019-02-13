'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable ('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.STRING,
      },
      to_user: {
        type: Sequelize.INTEGER,
      },
      from_user: {
        type: Sequelize.INTEGER,
      },
      responses: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable ('Messages');
  },
};
