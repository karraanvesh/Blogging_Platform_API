const express = require("express");
const { getBlogHandler, createBlogHandler, updateBlogHandler, deleteBlogHandler } = require("../../controllers/blogging.controller.js");

// TODO : revise this express router and how exactly the routing is happening in express 
const blogRouter = express.Router();

blogRouter.get('/:id' , getBlogHandler);

blogRouter.post('/posts' , createBlogHandler);

blogRouter.patch('/posts/:id' , updateBlogHandler);

blogRouter.delete('/posts/:id' , deleteBlogHandler);

module.exports = {
    blogRouter
};