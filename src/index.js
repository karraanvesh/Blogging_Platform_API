const express = require('express'); // requiring the express module , it returns a function 
const { serverConfig } = require('./config/server.config.js');
const { blogRouter } = require('./routers/v1/blog.router.js');

// express is a function , calling this function will create a new app / server instance or object
const app = express();

const PORT = serverConfig.PORT; // PORT at which our express server has to start

// TODO : why we need to manually , specify express.json() in express server object to parse the req 
// body which is being sent as a json
/**
 * Query and url params are going to be sent in the request url , so we don't need any extra 
 * processing to access them in the express.
 * 
 * But request body is not sent in the request but can be accessed using req.body property.
 * And request body can be anything text , json , html , xml , js etc. Since the data which
 * can be sent from the client can be anything we need to manually tell the express js that 
 * we are going to receive certain type data from the client , so please parse it .
 * 
 * express does serialization and deserialization i.e., the data sent from the client is
 * converted into some simpler format and then once received at the receivers end it can 
 * be deserialized to get the actual data.
 * 
 * Then , the express js understands it and parses the corresponding data from the req body.
 */
app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */
app.use('/api/v1' , blogRouter);

/**
 * Using the express server object , we are configuring the PORT at which our express server 
 * should listen or start . 
 * 
 * If there are no errors or issues and we are able to start our express server at the defined PORT . 
 * Then , the callback will be executed and prints that the server started at PORT : 3000
 */
app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


