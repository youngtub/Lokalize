const express = require('express');
const router = require('express').Router();

const signupHandler = require('../controllers/signupHandler');
const loginHandler = require('../controllers/loginHandler');
const formHandler = require('../controllers/formHandler');

router.post('/signup', signupHandler);

// router.get('/login', loginHandler);

// router.get('/logout'); //need to destroy session

router.post('/form', formHandler);