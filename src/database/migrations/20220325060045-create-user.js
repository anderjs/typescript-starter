/* eslint-disable prettier/prettier */
"use strict"

module.exports = {
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      }
    })
  },

  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  down: async (queryInterface) => {
    return queryInterface.dropTable("Users")
  }
}
