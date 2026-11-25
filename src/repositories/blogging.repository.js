const Blog = require("../db/models/blog.js")

async function createBlog(blogData) {
    try {
        const blog = await Blog.create({
            title    : blogData.title,
            content  : blogData.content,
            category : blogData.category,
            tags     : {
                tagNames : blogData.tags
            }
        });

        console.log(`Blog created : ` , blog);

        return blog;
    } catch (error) {
        throw new Error("From repository layer : " , error.message);
    }
}

async function getBlogById(id) {
    try {
        const blog = await Blog.findByPk(id);

        if(!blog) {
            console.log(`Blog not found: ${id}`);
            throw new Error("NotFoundError : " , error.message);
        } else {
            console.log(`Blog found : ${blog.id}`);
            return blog;
        }
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
    createBlog,
    getBlogById,
    updateBlogRepository,
    deleteBlogRepository
};