function validateRequestBody(blog) {

    console.log(blog.content);

    let result = true;

    if (blog.title == undefined || blog.content == undefined) {
        result = false;
    }

    return result;
}

module.exports = validateRequestBody;