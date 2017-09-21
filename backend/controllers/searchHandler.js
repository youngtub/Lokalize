const express = require('express');
const Sequelize = require('sequelize');
const sequelize = require('../db.js');
const Events = require('../models/eventSchema');
const parser = require('body-parser');
const NodeGeocoder = require('node-geocoder');
const geodist = require('geodist');
const Participations = require('../models/usersEventsSchema.js');


exports.checkUserEvents = (req, res, next) => {
  let user_id = req.body.user_id;
  let date = req.body.date;
  sequelize.query(`
    select *
    from participations
    join events on events.id = participations.event_id
    where participations.user_id = '${user_id}'
      and events.date = '${date}'`,
      { type: sequelize.QueryTypes.SELECT})
    .then(data => {
      if (data.length === 0) {
        next()
      }
      else {
        res.send('Already have an event this day')
      }
    })
}

exports.searchEvents = (req, res) => {
  let options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyAW-bhpsTQLkZsOn_3dVOyde1WwxrIUhqU'
  };
  let geocoder = NodeGeocoder(options);
  geocoder.geocode(req.body.address)
  .then(function(mapRes) {
    let guestLatitude = mapRes[0].latitude;
    let guestLongitude = mapRes[0].longitude;
    let date = req.body.date;
    let user_id = req.body.user_id
    let type = req.body.dinnerType;
    Events.findAll({
      where: {
        date: date,
        dinner_type: type
      }
    })
    .then( (events) => {
      if (events.length > 0) {
        let userCoordinates = {lat: guestLatitude, lon: guestLongitude}
        let closestEvent = events.reduce((closest, event) => {
          let closestCoords = closest.address;
          let eventCoords = event.address;
          let closestDist = geodist(userCoordinates, {lat: closestCoords[0], lon: closestCoords[1]})
          let eventDist = geodist(userCoordinates, {lat: eventCoords[0], lon: eventCoords[1]})
          return closestDist > eventDist ? event : closest;
        })
        Participations.create({
          user_id: user_id,
          event_id: closestEvent.id
        })
        .then(() => {
          res.send('success');
        })
        .catch((err) => {
          console.error(err)
        })
      } else {
        res.send(false)
      }
    })
  })
  .catch(function(err) {
    console.log(err);
  });


};
