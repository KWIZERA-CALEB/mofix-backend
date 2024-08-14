const MovieModel = require('../Models/MovieModel')

//add movie

const add = (req, res)=> {
    let movie = new MovieModel({
        movie_title: req.body.movie_title,
        productions_company: req.body.productions_company,
        country: req.body.country,
        movie_des: req.body.movie_des
    })

    //get the thumbnail image
    if(req.file) {
        movie.thumbnail_img = req.file.path
    }

    //get the movie video
    if(req.file) {
        movie.movie_video = req.file.path
    }

    //store movie
    movie.save()
        .then(()=> {
            res.json({
                message: 'Movie added'
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: 'Failed to add movie'
            })
        })
}

const index = (req, res)=> {
    MovieModel.find()
        .then((data)=> {
            res.json({
                data
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: 'Failed to fetch movies'
            })
        })
}

module.exports = { add, index }