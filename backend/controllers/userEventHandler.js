const express = require('express');
const Sequelize = require('sequelize');
const sequelize = require('../db.js');
const Users = require('../models/userSchema');
const Events = require('../models/eventSchema');
const Participation = require('../models/usersEventsSchema');
const parser = require('body-parser');


const handleUserEvent = (req, res) => {
  let username = 'User1';

  sequelize.query(`
    select
      username,
      name as eventName,
      dinner_type,
      date as eventDate,
      location as eventLocation,
      capacity
    from users u
    join participations on participations.userId = u.id
    join events on events.id = participations.event_id
    where username = '${username}'`, { type: sequelize.QueryTypes.SELECT})
    .then(user => {res.send(user)})
  }

module.exports = handleUserEvent;
