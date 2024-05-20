const express = require('express')
const UserController = require('../Controllers/UserController')
const router = express.Router()

router.post('/signup', UserController.store)
router.post('/login', UserController.login)


module.exports = router