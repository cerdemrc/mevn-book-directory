// Importing required modules
const cors = require('cors');
const express = require('express');
const routers = require('./routes/index')
const connectDatabase = require("./helpers/database/connectDatabase")
const customErrorHandler = require('./middlewares/errors/customErrorHandler')

// parse env variables
require('dotenv').config();

// Configuring port
const PORT = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

//Database connection
connectDatabase();

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api', routers);

//Error Handler is a middleware
app.use(customErrorHandler)

// Listening to port
app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
});

module.exports = app;
