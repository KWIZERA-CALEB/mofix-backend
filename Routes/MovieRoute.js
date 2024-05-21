const express = require('express')
const MovieController = require('../Controllers/MovieController')
const router = express.Router()

const UploadThumbnailMiddleware =  require('../Middlewares/UploadThumbnail')
const UploadMovieVideoMiddleware =  require('../Middlewares/UploadVideoMovie')


//movie routes
router.post('/addmovie',UploadThumbnailMiddleware.single('thumbnail_img'), UploadMovieVideoMiddleware.single('movie_video'), MovieController.add)

module.exports = router