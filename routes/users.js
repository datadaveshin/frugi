"use strict";

// Require
const express = require('express');
const bcrypt = require('bcrypt-as-promised');
const knex = require('db/knex');
const router = express.Router();

// GET for new user Sign Up Page
router.get('/new', (res, req) => {
    render('/signup');
})

// POST for new user Sign Up Page
router.post('/', (req, res) => {
    
})
