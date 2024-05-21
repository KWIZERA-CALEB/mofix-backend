const MovieModel = require('../Models/MovieModel')

//add movie

const add = (req, res)=> {
    let movie = new MovieModel({
        movie_title: req.body.movie_title,
        productions_company: req.body.productions_company,
        country: req.body.country,
        movie_des: req.body.movie_des
    })

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

module.exports = { add }