const poolDB = require("../config/db.config");
const userModel = require("../models/user.model");
const { ApiError } = require("../utils/responses");
const jwt = require("jsonwebtoken");

exports.isLoggedIn = async (req, res, next) => {
  const client = await poolDB.connect();
  try {
    const token = req.cookies["token"] || req.headers.authorization.split(" ")[1];

    if (!token) {
      return ApiError(res, 401, "No identity found");
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // check in db
    const userData = await userModel.findById(decoded.id);

    if (!userData) {
      return ApiError(res, 401, "No identity found");
    }

    userData.password = undefined;
    req.user = userData;

    next();
  } catch (error) {
    console.log("isLoggedIn err:", error);
    return ApiError(res, 401, "No identity found");
  } finally {
    client.release();
  }
};

// exports.manageRole = (allowedRoles) => {
//   return (req, res, next) => {
//     if (!req.user) {
//       return ApiError(res, 401, "Unauthorized: Access denied");
//     }

//     const userRole = req.user.role_name; // case-sensitive

//     if (!allowedRoles.includes(userRole)) {
//       return ApiError(res, 403, "Unauthorized: Access denied");
//     } else {
//       next();
//     }
//   };
// };
