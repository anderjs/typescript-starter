/* eslint-disable prettier/prettier */
"use strict"

module.exports = {
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      {
        username: "admin",
        firstName: "Elon",
        lastName: "Musk",
        email: "system@nectia.com",
        password: "$2a$10$Npl5eYahGswscob1lyhxJOjzqhQFfCOJzqtL7vWxgjRTeNIfyntMS"
      },
      {}
    )
  },
  /**
   * @param {import ('sequelize').QueryInterface} queryInterface
   * @param {import ('sequelize').Sequelize} Sequelize
   */
  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {})
  }
}
