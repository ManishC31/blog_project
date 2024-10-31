const blogModel = require("../models/blog.model");
const asyncHandler = require("../utils/asyncHandler");
const { InternalError, ApiResponse } = require("../utils/responses");

exports.getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const blogs = await blogModel.find();

        return ApiResponse(res, 200, "Blogs fetched successfully", blogs);
    } catch (error) {
        console.log("getAllBlogs err:", error);
        InternalError(res);
    }
})

exports.getBlogById = asyncHandler(async (req, res) => {
    try {
        const blogId = req.params.id;

        const blog = await blogModel.findById(blogId);

        return ApiResponse(res, 200, null, blog);
    } catch (error) {
        console.log('getBlogById err:', error);
        InternalError(res)
    }
})

exports.createNewBlog = asyncHandler(async (req, res) => {
    try {
        const { title, introduction, description, category, tags } = req.body;

        // save images if present
        if (req.file) { }

        const blog = await blogModel.create({
            title,
            introduction,
            description,
            author: req.user._id,
            category: category,
            tags: tags
        });

        return ApiResponse(res, 200, "Blog created successfully", blog);

    } catch (error) {
        console.log('createNewBlog err:', error);
        InternalError(res)
    }
})