/* eslint-disable prettier/prettier */
import { Sequelize } from "sequelize-typescript"

import configuration from "src/config"

const config = configuration();

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "mysql",
        host: config.database.host,
        port: config.database.port,
        username: config.database.username,
        database: config.database.database,
        password: config.database.password
      })

      await sequelize.sync()

      return sequelize
    }
  }
]
