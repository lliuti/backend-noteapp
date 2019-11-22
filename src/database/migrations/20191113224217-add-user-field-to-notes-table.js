'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('notes', 'user_id', { 
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      });
  },

  down: (queryInterface) => {
      return queryInterface.removeColumn('notes', 'user_id');
  }
};
