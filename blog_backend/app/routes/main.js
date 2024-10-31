const express = require('express')
const router = express.Router()
const loginRoutes = require('./auth.route')
const blogRoutes = require('./blog.route')

router.use('/auth', loginRoutes)
router.use('/blog', blogRoutes)

module.exports = router