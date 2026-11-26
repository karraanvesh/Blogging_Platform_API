const express = require("express");
const { createBlogHandler, updateBlogHandler, deleteBlogHandler, getBlogGyIdHandler, getAllBlogsHandler } = require("../../controllers/blogging.controller.js");

const blogRouter = express.Router();


blogRouter.get('/:id' , getBlogGyIdHandler);

blogRouter.get('' , getAllBlogsHandler);

blogRouter.post('/posts' ,createBlogHandler);

blogRouter.patch('/posts/:id' , updateBlogHandler);

blogRouter.delete('/posts/:id' , deleteBlogHandler);

module.exports = {
    blogRouter
};