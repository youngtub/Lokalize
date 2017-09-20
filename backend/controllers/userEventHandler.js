const express = require('express');
const Sequelize = require('sequelize');
const Users = require('../models/userSchema');
const Events = require('../models/eventSchema');
const Participation = require('../models/usersEventsSchema');
const parser = require('body-parser');
//get request to database for user events
//find user id
//go to join table
//find event id
//go to event table
//return event at id

const handleUserEvent = (req, res) => {
  let username = 'User1';
  // req.body.username;
  Users.findOne({ where: {username: username} })
    .then( (userData) => {
      console.log('step1')
      if (userData) {
        console.log('userdata ..... ', userData)
        let id = userData.id;
        Participation.findAll({ where: {userId: id}}) 
        console.log('step2')
        .then( (participationData) => {
          let eventId = participationData.eventId;
          console.log(' partipation eventid', eventId)
          Events.findAll({where: {id: eventId}})
          console.log('step3')
          .then( (events) => {
            console.log('finnaallllyyy ', events)
            res.status(200).send(events);
          })
          .catch( (err) => {
            res.status(404).send('events findAll is a no go');
          })
        })
        .catch( (err) => {
          res.status(404).send('participation findAll is a no go');
        })
      }
    })
    .catch( (err) => {
      res.status(404).send('users findOne is a no go');
    })
  }

module.exports = handleUserEvent;
