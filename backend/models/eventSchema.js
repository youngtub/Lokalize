const User = require('./userSchema');
const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const Events = sequelize.define('event', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  date: Sequelize.DATE,
  location: Sequelize.ARRAY(Sequelize.FLOAT),
  capacity: Sequelize.INTEGER,
  dinnerType: Sequelize.STRING
}, {
  timestamps: false
});

Events.hasOne(User); //defining one user to many event relationship + using foreign key (user_id) here

// create the table in db

Events.sync({ force: false })
  .then( () => {
    console.log('Events table created');
  })
  .catch( (err) => console.error('In EVENTS table', err));

module.exports = Events;
