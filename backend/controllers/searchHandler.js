const express = require('express');
const Sequelize = require('sequelize');
const Events = require('../models/eventSchema');
const parser = require('body-parser');
const NodeGeocoder = require('node-geocoder');

exports.searchEvents = (req, res) => {

  let options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyAW-bhpsTQLkZsOn_3dVOyde1WwxrIUhqU'
  };
  let geocoder = NodeGeocoder(options);
  geocoder.geocode(req.body.address)
  .then(function(mapRes) {
    let latitude = mapRes[0].latitude;
    let longitude = mapRes[0].longitude;
    let date = req.body.date;
    let type = req.body.dinnerType;
    Events.findAll({
      where: {
        date: date,
        dinner_type: type
      }
    })
    .then( (events) => {
      if (events.length > 0) {
        res.send(events);
      } else {
        res.send('There were no events matching your search, but we encourage you to be the first!')
      }
    })
  })
  .catch(function(err) {
    console.log(err);
  });


};
