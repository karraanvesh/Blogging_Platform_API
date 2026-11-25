const { Sequelize } = require("sequelize");
const { dbConfig } = require("./../../config/server.config.js");

const sequelize = new Sequelize( dbConfig.DB_NAME,
    dbConfig.DB_USER,
    dbConfig.DB_PASSWORD,
    {  
        dialect  : "mysql",
        host     : dbConfig.DB_HOST,
        logging  : true,
    }
    
);

module.exports = sequelize;