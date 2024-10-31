const userModel = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");
const { InternalError, ApiError, ApiResponse } = require("../utils/responses");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.registerUser = asyncHandler(async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !email || !password) {
      return ApiError(res, 400, "Please provide all fields");
    }

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return ApiError(res, 400, "User already exists");
    }

    const encPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      firstname,
      lastname,
      email,
      password: encPassword,
    });

    // save profile image if present
    if (req.file) {
    }

    user.password = undefined;
    return ApiResponse(res, 201, "User created successfully", user);
  } catch (error) {
    console.log("registerUser", error);
    InternalError(res);
  }
});

exports.loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return ApiError(res, 400, "Please provide email and password");
    }

    const existingUser = await userModel.findOne({ email: email });

    if (!existingUser) {
      return ApiError(res, 404, "User not found");
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);

    if (!isValidPassword) {
      return ApiError(res, 400, "Email and password are not matching");
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("token", token);

    res.cookie("token", token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript on the client side
      maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration in milliseconds - 7 days
    });

    return ApiResponse(res, 200, "User logged in successfully", {
      token: token,
      user: {
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log("loginUser", error);
    InternalError(res);
  }
});

exports.logoutUser = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true, // Use this in production with HTTPS
      sameSite: "Strict",
    });

    return ApiResponse(res, 200, "User logged out successfully");
  } catch (error) {
    console.log("logoutUser err:", error);
    return InternalError(res);
  }
});
