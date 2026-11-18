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
    /**
     * url params are special .
     * 
     * Query params can be easily distinguished since everything after the ? in the request url are the query params.
     * But in order to identify the url params we need manually tell to the express that this integral part is the 
     * url param.
     * 
     * i.e., /:{name_of_the_url_param} , But default the value is treated as a string and everything before and after this 
     * integral part is a string.
     * 
     * Based on our usecase we can manually convert this string value to any other value.
     * 
     * url params can be accessed using req.params
     */
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