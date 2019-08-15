'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('definitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      definition: {
        type: Sequelize.TEXT
      },
      counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      lastCheckedAt: {
        type: Sequelize.DATE,
        defaultValue: null,
        field: 'last_checked_at'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    }).then(() => {
      queryInterface.addIndex('definitions', ['last_checked_at'])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('definitions');
  }
};