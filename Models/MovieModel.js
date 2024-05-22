const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    movie_title: {
        type: String
    },
    productions_company: {
        type: String
    },
    country: {
        type: String
    },
    movie_des: {
        type: String
    },
    thumbnail_img: {
        type: String
    }
}, {timestamps: true})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie