const express = require("express");
const { createBlogHandler, updateBlogHandler, deleteBlogHandler, getBlogGyIdHandler, getAllBlogsHandler, getBlogsByFilterHandler, getBlogsByIdHandler } = require("../../controllers/blogging.controller.js");

const blogRouter = express.Router();

blogRouter.get('/posts' , getBlogsByFilterHandler);

blogRouter.get('/:id' , getBlogsByIdHandler);

blogRouter.get('' , getAllBlogsHandler);

blogRouter.post('/posts' ,createBlogHandler);

blogRouter.patch('/posts/:id' , updateBlogHandler);

blogRouter.delete('/posts/:id' , deleteBlogHandler);

module.exports = {
    blogRouter
};