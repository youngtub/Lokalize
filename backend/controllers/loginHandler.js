const express = require('express');
const Sequelize = require('sequelize');
const users = require('../models/userSchema');
const parser = require('body-parser');

exports.handleLogin = (req, res) => {
  var user = {};
  user['username'] = req.body.username;
  user['password'] = req.body.password;
  var usernameExists = users.findOne({where: {username: user.username, password: user.password}})
  .then((usernameExists) => {
    if (usernameExists) {
      res.send('you are logged in!')
      res.redirect('/home');
    } else {
      res.send('username or password did not match, please try again');
      res.redirect('/login');
      }
    })
  };
