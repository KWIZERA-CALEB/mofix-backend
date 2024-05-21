const express = require('express')
const mongoose = require('mongoose')
const { config } = require('dotenv')

config()



const dbConnectionString = process.env.NODE_ENV === 'production' 
    ? process.env.PROD_DB_CONNECT_STRING 
    : process.env.DEV_DB_CONNECT_STRING;

const connect = (callback) => {
    mongoose.connect(dbConnectionString)
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