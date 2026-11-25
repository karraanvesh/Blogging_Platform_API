const express = require("express");
const { createBlogHandler, updateBlogHandler, deleteBlogHandler, getBlogGyIdHandler } = require("../../controllers/blogging.controller.js");

const blogRouter = express.Router();


blogRouter.get('/:id' , getBlogGyIdHandler);

blogRouter.post('/posts' , createBlogHandler);

blogRouter.patch('/posts/:id' , updateBlogHandler);

blogRouter.delete('/posts/:id' , deleteBlogHandler);

module.exports = {
    blogRouter
};