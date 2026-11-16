const express = require('express'); // requiring the express module , it returns a function 
const { serverConfig } = require('./config/server.config.js');
const { blogRouter } = require('./routers/v1/blog.router.js');

// express is a function , calling this function will create a new app / server instance or object
const app = express();

const PORT = serverConfig.PORT; // PORT at which our express server has to start

/**
 * Express server object gets access to the all the http methods like get , post , delete , Patch etc.
 * Each http function has two parameters 
 * 
 * 1. url
 * 2. callback which has the access to the req and res objects.
 * 
 * res.send() can be used to send the response to the corresponding request.
 * 
 */

// TODO : why we need to manually , specify express.json() in express server object to parse the req 
// body which is being sent as a json
app.use(express.json());

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


