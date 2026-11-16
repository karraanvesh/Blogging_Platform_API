const dotenv = require('dotenv');

dotenv.config();

const serverConfig = {
    PORT : Number(process.env.PORT) || 8080
};

module.exports = {
    serverConfig
};