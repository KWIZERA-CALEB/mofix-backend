const express = require('express')
const MovieController = require('../Controllers/MovieController')
const router = express.Router()


//movie routes
router.post('/addmovie', MovieController.add)

module.exports = router