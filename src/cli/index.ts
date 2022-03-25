/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const mysql = require("mysql")
require("dotenv").config()

const database = process.env.DATABASE_NAME

console.log(process.env.DATABASE_USERNAME)

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
})


connection.query(
  "CREATE DATABASE IF NOT EXISTS ??",
  database,
  function (err, results) {
    if (err) {
      console.log("error in creating database", err)
    }

    console.log({
      err,
      results,
      database,
      connection: true,
      created: true
    });

    connection.changeUser(
      {
        database
      },
      function (err) {
        if (err) {
          console.log("error in changing database", err)
        }
      }
    )
  }
)

process.exit();