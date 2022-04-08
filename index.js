const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const userRoute = require('./routes/auth')

dotenv.config()

const app = express()

mongoose.connect(
    process.env.Mongokey
    ).then(()=> console.log('successful'))
    .catch((err) => {
        console.log(err)
    })



app.use(express.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.use('/api/users', userRoute)

app.listen(2000, function () {
    console.log('started')
})