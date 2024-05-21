const express = require('express')
const UserController = require('../Controllers/UserController')
const router = express.Router()

const authenticate = require('../Middlewares/Authentication')

router.post('/signup', UserController.store)
router.post('/login', UserController.login)




module.exports = router