const express = require('express')
const mongoose = require('mongoose')
const database = require('./database')
const bodyParser = require('body-parser')
const { config } = require('dotenv')
const cors = require('cors')

config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const UserRoute = require('./Routes/UserRoute')




database.connect((error)=> {
    if(error) {
        console.log('Failed to connect')
    }else{
        app.listen(process.env.APP_PORT, ()=> {
            console.log(`App running on port ${process.env.APP_PORT}`)
        })
    }
})


app.use('/api', UserRoute)