const userModel = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");
const { InternalError, ApiError, ApiResponse } = require("../utils/responses");

exports.getUserById = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    console.log("getUserById", error);
    InternalError(res);
  }
});

