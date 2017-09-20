const express = require('express');
const Sequelize = require('sequelize');
const events = require('../models/eventSchema');
const parser = require('body-parser');

exports.handleForm = (req, res) => {
  console.log('DATA in form handler', data);
  var data = {};
  // data.username = req.body.username;
  // const password = req.body.password;
  data["name"] = req.body.name;
  data["dinnerType"] = req.body.dinnerType;
  data["date"] = req.body.date;
  data["capacity"] = req.body.capacity;
  data["location"] = req.body.location;
  data["address"] = req.body.address;
  var exists = events.findAll({data})
  .then( (exists) => {
    if (exists) {
      return res.send('Event already exists!');
   }});
  var newEvent = events.create({
    name: data.name,
    dinner_type: data.dinnerType,
    date: data.date,
    capacity: data.capacity,
    location: data.location,
    address: data.address
  })
  .then((newEvent) => {
    if(newEvent) {
      res.send('Event created!');
    } else {
      console.error('Error: ', err);
    }
  })
  };
