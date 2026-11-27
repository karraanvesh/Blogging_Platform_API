const Blog = require("../db/models/blog.js")
const { Op } = require("sequelize");

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

        blog.tags = blog.tags.tagNames;

        return blog;
    } catch (error) {
        throw new Error("From repository layer : " , error.message);
    }
}

async function getBlogById(id) {
    try {
        const blog = await Blog.findByPk(id , {
            where : {
                deletedAt : null
            }
        });

        if(!blog) {
            console.log(`Blog not found: ${id}`);
            throw new Error("NotFoundError : " , error.message);
        } else {
            console.log(`Blog found : ${blog.id}`);

            blog.tags = blog.tags.tagNames;

            return blog;
        }
    } catch (error) {
        console.log(error);
    }
}

async function getAllBlogs() {
    try {
        const blogs = await Blog.findAll({
            where : {
                deletedAt : null
            }
        });

        if(!blogs) {
            throw new Error("NotFoundError");
        }

        const noOfBlogs = blogs.length;

        for(let i = 0 ; i < noOfBlogs ; i++) {
            const currentBlog = blogs[i];

            currentBlog.tags = currentBlog.tags.tagNames;
        }

        return blogs;
    } catch (error) {
        console.log("error in reposiotiory layer " , error);
    }
}

async function updateBlog(id , updatedContent) {
    try {
        const blog = await Blog.findByPk(id);

        if(!blog) {
            console.log(`Blog not found with id : ${id}`);
            throw new Error("NotFoundError");
        }

        blog.content = updatedContent;

        await blog.save();

        blog.tags = blog.tags.tagNames;

        return blog;
    } catch (error) {
        console.log(error);   
    }
}

async function deleteBlog(id) {
    try {
        const blog = await Blog.findByPk(id);

        let isDeleted = false;

        if(!blog) {
            console.log(`Blog not found for id : ${id}`);
            throw new Error("NotFoundError");
        }

        blog.deletedAt = new Date();

        await blog.save();

        isDeleted = true;

        return true;        
    } catch (error) {
        console.log(error);
    }
}

async function getBlogsByFilter(filter) {
    try {
        const blogs = await Blog.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${filter}%` }},
                    { category: { [Op.like]: `%${filter}%` }},
                    { content: { [Op.like]: `%${filter}%`}},
                ],
                [Op.and]: [
                    {deletedAt : null}
                ]
            },
        });

        if(!blogs) {
            throw new Error("NotFoundError");
        }

        const noOfBlogs = blogs.length;

        for(let i = 0 ; i < noOfBlogs ; i++) {
            const currentBlog = blogs[i];

            currentBlog.tags = currentBlog.tags.tagNames;
        }

        return blogs;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createBlog,
    getBlogById,
    getAllBlogs,
    updateBlog,
    deleteBlog,
    getBlogsByFilter
};