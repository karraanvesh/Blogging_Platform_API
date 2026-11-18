const express = require("express");
const { getBlogHandler, createBlogHandler, updateBlogHandler, deleteBlogHandler } = require("../../controllers/blogging.controller.js");

// TODO : revise this express router and how exactly the routing is happening in express
// express provides us a router function , for which we can attach the type of the 
// request which can be made from the client . Each HTTP request takes two arguments
// 1 . url , 2. function to which the request should be directed to
const blogRouter = express.Router();

console.log(typeof blogRouter);

/**
 * url params are special .
 * 
 * Query params can be easily distinguished since everything after the ? in the request url are the query params.
 * But in order to identify the url params we need manually tell to the express that this integral part is the 
 * url param.
 * 
 * i.e., /:{name_of_the_url_param} , But default the value is treated as a string and everything before and after this 
 * integral part is a string.
 * 
 * Based on our usecase we can manually convert this string value to any other value.
 */
blogRouter.get('/:id' , getBlogHandler);

blogRouter.post('/posts' , createBlogHandler);

blogRouter.patch('/posts/:id' , updateBlogHandler);

blogRouter.delete('/posts/:id' , deleteBlogHandler);

module.exports = {
    blogRouter
};