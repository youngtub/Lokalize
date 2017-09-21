const express = require('express');
const Sequelize = require('sequelize');
const users = require('../models/userSchema');
const parser = require('body-parser');
const axios = require('axios');

exports.handleSignup = (req, res) => {
  var user = {};
  user['username'] = req.body.username;
  user['password'] = req.body.password;
  var usernameAlreadyInUse = users.findOne({where: {username: user.username}})
  .then((usernameAlreadyInUse) => {
    if (usernameAlreadyInUse) {
      return res.send(false);
    }
      var newUser = users.create({
        username: user.username,
        password: user.password
      })
      .then((newUser) => {
        if (newUser) {
          res.send(true);
        } else {
          console.error('Error:', err);
        }
      })
      .catch((err) => {
        res.status(404).send('eff this one')
      })
  })
  .catch((err) => {
    res.status(404).send('this is the error', err)
  })
};
