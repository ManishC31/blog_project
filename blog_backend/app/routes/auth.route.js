const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth.controller");
const { isLoggedIn } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isLoggedIn, logoutUser);

module.exports = router;
