"use strict";

// Require
const express = require('express');
const url = require('url');

// Start instance
const router = express.Router();

// Get
router.get('/', (req, res, next) => {
    res.send({Babu: 'Babu'})
})

module.exports = router;
