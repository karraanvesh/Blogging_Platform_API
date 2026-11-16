const { createBlogRepository, getBlogRepository, updateBlogRepository, deleteBlogRepository } = require("../repositories/blogging.repository.js");

async function createBlogService() {
    try {
        const blog = await createBlogRepository();

        return blog;
    } catch (error) {
        console.log(error);
    }
}

async function getBlogService(blogId) {
    try {
        const blog = await getBlogRepository(blogId);

        console.log("In get blogger service");

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