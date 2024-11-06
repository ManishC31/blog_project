const express = require("express");
const { isLoggedIn } = require("../middlewares/auth.middleware");
const { getAllBlogs, createNewBlog, getBlogById } = require("../controllers/blogs.controller");
const router = express.Router();

router.get('/all', isLoggedIn, getAllBlogs)
router.post('/create', isLoggedIn, createNewBlog)
router.get('/:id', isLoggedIn, getBlogById)

module.exports = router;
