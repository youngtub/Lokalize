const express = require('express');
const Sequelize = require('sequelize');
const users = require('../models/userSchema');
const parser = require('body-parser');
const axios = require('axios');

exports.handleSignup = (req, res) => {
  var user = {};
  user['username'] = req.body.username;
  user['password'] = req.body.password;
  user['cityName'] = req.body.cityName;
  var usernameAlreadyInUse = users.findOne({where: {username: user.username}})
  .then((usernameAlreadyInUse) => {
    if (usernameAlreadyInUse) {
      return res.send(false);
    }
    locationAPICall(user.cityName)
    .then( (cityId) => {
      var newUser = users.create({
        username: user.username,
        password: user.password,
        city_id: cityId
      })
      .then((newUser) => {
        if (newUser) {
          res.send(true); //true, setState
        } else {
          console.error('Error:', err);
        }
      })
      .catch((err) => {
    res.status(404).send('eff this one')
  })
    })
    .catch((err) => {
    res.status(404).send('eff this two')
  })
  })
  .catch((err) => {
    res.status(404).send('this is the error', err)
  })
};

var locationAPICall = (locationString) => {
  var location = locationString.replace(/ /g, '%20');
  var reqUrl = "https://developers.zomato.com/api/v2.1/locations?query=" + location;
  var config = {
    "headers" : {
  	   "Content-Type": "application/json",
  	    "user-key": "0531c898c316947b94f8b79453e43caf"
      }
    };
  return axios.get(reqUrl, config)
  .then( (results) => {
    console.log('RESULTS', results)
  	return cityId = results.data.location_suggestions[0].entity_id;
  })
  .catch( (err) => console.error(err));
}
