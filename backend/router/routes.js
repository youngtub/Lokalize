const express = require('express');
const path = require('path');

const router = require('express').Router();

const signupHandler = require('../controllers/signupHandler');
const loginHandler = require('../controllers/loginHandler');
const formHandler = require('../controllers/formHandler');




// router.post('/signup', signupHandler);

// router.get('/login', loginHandler);

// router.get('/logout'); //need to destroy session

router.post('/form', formHandler.handleForm);

module.exports = router;



// router.all('/', function (req, res, next) {
//   console.log('Someone made a request!');
//   next();
// });

// router.get('/', function (req, res) {
//   res.render('index');
// });
