/* eslint-disable prettier/prettier */
"use strict"

module.exports = {
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Products", {
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      price: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      sku: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
    })
  },

  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  down: async (queryInterface) => {
    return queryInterface.dropTable("Products")
  }
}
