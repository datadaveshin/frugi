"use strict";

// Require
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Variables
const PORT = '3030';

// Require for routes
const index = require("./routes/index");

// Start app instance
const app = express();

// Use components
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

// Routes
app.use('/', index);

// 404 messages to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Export
module.exports = app;
