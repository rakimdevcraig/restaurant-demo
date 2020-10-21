//Reference used: https://www.youtube.com/watch?v=KyWaXA_NvT0&t=2358s
//for setting up the backend with MVC


const express = require('express')
const mongoose = require('mongoose')
const menu = require('./routes/api/menuroutes')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path")

//Allow cors
app.use(cors());

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//db config
const db = require('./config/keys').mongoURI

//connect to mongo using mongoose
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected.....'))
    .catch(err => console.log(err))

//attaches the app to our routes in the menu file inside of the api folder
app.use('/', menu)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))



