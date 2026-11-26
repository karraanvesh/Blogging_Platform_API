const { createBlog, getBlogById, updateBlog, deleteBlog, getAllBlogs } = require("../repositories/blogging.repository.js");

async function createBlogService(blogData) {
    try {
        const blog = await createBlog(blogData);

        return blog;
    } catch (error) {
        console.log(error);
    }
}

async function getBlogService(id) {
    try {
        const blog = await getBlogById(id);

        return blog;
    } catch (error) {
        console.log(error);
    }
}

async function getAllBlogsService() {
    try {

        const blogs = await getAllBlogs();

        return blogs;
    } catch (error) {
        console.log(error);
    }
}

async function updateBlogService(id , updatedContent) {
    try {
        const blog = await updateBlog(id , updatedContent);

        return blog;
    } catch (error) {
        console.log(error);   
    }
}

async function deleteBlogService(id) {
    try {

        const result = await deleteBlog(id);

        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createBlogService,
    getBlogService,
    getAllBlogsService,
    updateBlogService,
    deleteBlogService
};