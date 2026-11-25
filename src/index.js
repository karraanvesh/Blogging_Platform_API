const express = require('express'); // requiring the express module , it returns a function 
const { serverConfig } = require('./config/server.config.js');
const { blogRouter } = require('./routers/v1/blog.router.js');
const sequelize = require('./db/models/sequelize.js');
const Blog = require('./db/models/blog.js');

// express is a function , calling this function will create a new app / server instance or object
const app = express();

const PORT = serverConfig.PORT; 

// to enable express to read the json in the request body
app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */
app.use('/api/v1' , blogRouter);

app.listen(PORT , async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    try {
        await sequelize.authenticate(); // Test the connection to the database
        console.log("Database connection has beem established successfully.");

        const blog = await Blog.create({
            title   : "My First Blog Post",
            content : "This is the content of my first blog post.",
            category: "Technology",
            tags    : {
                tagNames : ["Tech", "Programming"]
            },
        });

        console.log(`Blog created Successfully : ` , blog.toJSON());
    } catch (error) {
        console.log("Something went wrong in the db queries" , error);
    }
});