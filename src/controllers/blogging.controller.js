const validateRequestBody = require("../middlewares/validateCreateBlog.js");
const { createBlogService, getBlogService, updateBlogService, deleteBlogService, getAllBlogsService, getBlogsByFilterService } = require("../services/blogging.service.js");

async function createBlogHandler(req , res) {

    if(!validateRequestBody(req.body)) {
        res.status(400).json({
            message: "Request body does not contain all the required fields",
            data : null,
            success: false,
        });
    } else {
        const blogResponse = await createBlogService(req.body);

        res.status(201).json({
            message: "Blog created successfully",
            data: blogResponse,
            success: true,
        });
    }
}

async function getBlogsByIdHandler(req , res) {

    const blog = await getBlogService(Number(req.params.id));

    res.status(200).json({
        message  : "Blog found successfully",
        data     : blog,
        success  : true,
    });
}

async function getAllBlogsHandler(req , res) {
    const blogs = await getAllBlogsService();

    res.status(200).json({
        message  : "Blogs fetched successfully",
        data     : blogs,
        success  : true
    });
}

async function updateBlogHandler(req , res) {

    const blog = await updateBlogService(Number(req.params.id) , req.body.content);

    res.status(200).json({
        message: "Blog updated successfully",
        data: blog,
        success: true,
    })
}

async function deleteBlogHandler(req , res) {

    const result = await deleteBlogService(Number(req.params.id));

    res.status(204).json({
        message: "Blog deleted successfully",
        data : result,
        success: true,
    })
}

async function getBlogsByFilterHandler(req , res) {

    const blogs = await getBlogsByFilterService(req.query.term);

    res.status(200).json({
        message: "Blogs fetched successfully",
        data : blogs,
        success: true
    });
}

module.exports = {
    createBlogHandler,
    getBlogsByIdHandler,
    getAllBlogsHandler,
    deleteBlogHandler,
    updateBlogHandler,
    getBlogsByFilterHandler
};