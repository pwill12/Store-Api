const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const ProductRoute = require('./routes/product')


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


app.use('/api/users', authRoute)
app.use('/api/users', userRoute)
app.use('/api/users/products', ProductRoute)



app.listen(4000, function () {
    console.log('started')
})