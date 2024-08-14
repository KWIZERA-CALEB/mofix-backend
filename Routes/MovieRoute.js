const express = require('express')
const MovieController = require('../Controllers/MovieController')
const router = express.Router()

const UploadThumbnailMiddleware =  require('../Middlewares/UploadThumbnail')
const UploadMovieVideoMiddleware =  require('../Middlewares/UploadVideoMovie')


//movie routes
router.post('/addmovie',UploadMovieVideoMiddleware.single('movie_video'), UploadThumbnailMiddleware.single('thumbnail_img'), MovieController.add)
router.get('/movies', MovieController.index)

module.exports = router