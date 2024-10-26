const categoryModel = require("../models/category.model");
const asyncHandler = require("../utils/asyncHandler");
const { InternalError } = require("../utils/responses");

exports.getAllCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await categoryModel.find();

    return ApiResponse(res, 200, "Categories fetched successfully", categories);
  } catch (error) {
    console.log("getAllCategories err:", error);
    InternalError(res);
  }
});

exports.getCategoryById = asyncHandler(async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await categoryModel.findById(categoryId);

    return ApiResponse(res, 200, "Category fetched successfully", category);
  } catch (error) {
    console.log("getCategoryById err:", error);
    InternalError(res);
  }
});

exports.createNewCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return ApiError(res, 400, "Please provide all fields");
    }

    const category = await categoryModel.create({ name });

    return ApiResponse(res, 201, "Category created successfully", category);
  } catch (error) {
    console.log("createNewCategory err:", error);
    InternalError(res);
  }
});
