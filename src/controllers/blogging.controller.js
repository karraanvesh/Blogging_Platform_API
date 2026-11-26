const { createBlogService, getBlogService, updateBlogService, deleteBlogService, getAllBlogsService } = require("../services/blogging.service.js");

async function createBlogHandler(req , res) {
    const blogResponse = await createBlogService(req.body);

    res.status(201).json({
        message: "Blog created successfully",
        data: blogResponse,
        success: true,
    });
}

async function getBlogGyIdHandler(req , res) {
    console.log(req.params);

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

    console.log(req.params);

    const result = await deleteBlogService(Number(req.params.id));

    res.status(204).json({
        message: "Blog created successfully",
        data : result,
        success: true,
    })
}

module.exports = {
    createBlogHandler,
    getBlogGyIdHandler,
    getAllBlogsHandler,
    deleteBlogHandler,
    updateBlogHandler
};