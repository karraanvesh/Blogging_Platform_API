const dotenv = require('dotenv');

function loadEnv() {
    dotenv.config();
}

loadEnv();

const serverConfig = {
    PORT : Number(process.env.PORT) || 8080
};

const dbConfig = {
    DB_USER     : process.env.DB_USER || "root",
    DB_PASSWORD : process.env.DB_PASSWORD || "",
    DB_NAME     : process.env.DB_NAME || "dev_db",
    DB_HOST     : process.env.DB_HOST || "localhost",
};

module.exports = {
    serverConfig , 
    dbConfig
};