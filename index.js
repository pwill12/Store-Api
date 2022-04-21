const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
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

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.use('/api', authRoute)
app.use('/api', userRoute)
app.use('/api/products', ProductRoute)



app.listen(4000, function () {
    console.log('started')
})