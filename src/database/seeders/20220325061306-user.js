/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const bcrypt = require("bcrypt");

"use strict"

module.exports = {
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface) {
    try {
      await queryInterface.bulkInsert(
        "Users",
        [
          {
            username: "admin",
            firstName: "Elon",
            lastName: "Musk",
            email: "system@nectia.com",
            password: bcrypt.hashSync("admin", 10),
          },
        ]
      )
    } catch (err) {
      throw err;
    }
  },
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {})
  }
}
