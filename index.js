const express = require('express')
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')
const { config } = require('dotenv')

config()

const app = express()


database.connect((error)=> {
    if(error) {
        console.log('Failed to connect')
    }else{
        app.listen(process.env.APP_PORT, ()=> {
            console.log(`App running on port ${process.env.APP_PORT}`)
        })
    }
})