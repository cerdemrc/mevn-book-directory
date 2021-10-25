// Importing required modules
const cors = require('cors');
const path = require('path')
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

app.use('/api', routers);

//Error Handler is a middleware
app.use(customErrorHandler)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}

// Listening to port
app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
});

module.exports = app;
