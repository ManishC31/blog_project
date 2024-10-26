const express = require("express");
const { isLoggedIn } = require("../middlewares/auth.middleware");
const { getAllCategories, getCategoryById, createNewCategory } = require("../controllers/category.controller");
const router = express.Router();

router.get("/", isLoggedIn, getAllCategories);
router.get("/:id", isLoggedIn, getCategoryById);
router.post("/create", isLoggedIn, createNewCategory);

module.exports = router;
