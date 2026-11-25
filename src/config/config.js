const { dbConfig } = require("./server.config")

const dbConfigDetails = {
  development : {
    username : dbConfig.DB_USER,
    password : dbConfig.DB_PASSWORD,
    database : dbConfig.DB_NAME,
    host     : dbConfig.DB_HOST,
    dialect  : "mysql"
  }
}

module.exports = dbConfigDetails;