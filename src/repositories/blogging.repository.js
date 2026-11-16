async function createBlogRepository() {
    try {
        const newBlog = `Blog created successfully`;

        return newBlog;
    } catch (error) {
        console.log(error);
    }
}

async function getBlogRepository(blogId) {
    try {
        const blog = `Blog with id : ${blogId} has been retreived successfully`;

        console.log("In get blogger repo");

        return blog;
    } catch (error) {
        console.log(error);
    }
}

async function updateBlogRepository(blogId) {
    try {
        const blog = `Blog with id : ${blogId} has been updated successfully`;

        return blog;
    } catch (error) {
        console.log(error);   
    }
}

async function deleteBlogRepository(blogId) {
    try {

        const result = `Blog with id : ${blogId} has been deleted successfully`;

        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createBlogRepository,
    getBlogRepository,
    updateBlogRepository,
    deleteBlogRepository
};