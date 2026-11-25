const express = require('express'); // requiring the express module , it returns a function 
const { serverConfig } = require('./config/server.config.js');
const sequelize = require('./db/models/sequelize.js');
const v1Router = require('./routers/v1/index.js');

// express is a function , calling this function will create a new app / server instance or object
const app = express();

const PORT = serverConfig.PORT; 

// to enable express to read the json in the request body
app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */
app.use('/api/v1' , v1Router);

app.listen(PORT , async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    await sequelize.authenticate(); // Test the connection to the database
    console.log("Database connection has been established successfully.");
});