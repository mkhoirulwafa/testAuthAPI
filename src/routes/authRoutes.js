const authController = require('../controllers/authController')
const router = require('express').Router()
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

router.post('/register', authentication, authorization, authController.register)
router.get('/login', authController.login)

module.exports = router