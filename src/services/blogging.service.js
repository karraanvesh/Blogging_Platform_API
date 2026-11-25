const { createBlog, getBlogById, updateBlogRepository, deleteBlogRepository } = require("../repositories/blogging.repository.js");

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

async function updateBlogService(blogId) {
    try {
        const blog = await updateBlogRepository(blogId);

        return blog;
    } catch (error) {
        console.log(error);   
    }
}

async function deleteBlogService(blogId) {
    try {

        const result = await deleteBlogRepository(blogId);

        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createBlogService,
    getBlogService,
    updateBlogService,
    deleteBlogService
};