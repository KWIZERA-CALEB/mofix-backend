const express = require('express')
const mongoose = require('mongoose')

const db_name = 'mofix'

const db_url = `mongodb://127.0.0.1:27017/${db_name}`

const connect = (callback) => {
    mongoose.connect(db_url)
        .then((response)=> {
            console.log('Database connected')
            callback()
        })
        .catch((error)=> {
            console.log(error)
            callback()
        })
}

module.exports = {connect}