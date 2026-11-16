const { createBlogService, getBlogService, updateBlogService, deleteBlogService } = require("../services/blogging.service.js");

async function createBlogHandler(req , res) {
    const blogResponse = await createBlogService();

    console.log(req.body);

    res.status(201).json({
        message: "Blog created successfully",
        data: blogResponse,
        success: true,
    });
}

async function getBlogHandler(req , res) {
    // TODO : revise these request query params  
    // also read about query and other params and how to use them
    console.log(req.params);

    const blog = await getBlogService(Number(req.params.id));

    res.status(200).json({
        message: "Blog retrieved successfully",
        data: blog,
        success: true,
    })
}

async function updateBlogHandler(req , res) {

    console.log(req.params);

    const blog = await updateBlogService(Number(req.params.id));

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
    getBlogHandler,
    deleteBlogHandler,
    updateBlogHandler
};