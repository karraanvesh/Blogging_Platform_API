const express = require("express");
const { blogRouter } = require("./blog.router");

const v1Router = express.Router();

v1Router.use('/blogs' , blogRouter);

module.exports = v1Router;