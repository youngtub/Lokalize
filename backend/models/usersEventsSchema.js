const User = require('./userSchema');
const Events = require('./eventSchema');
const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const Participation = sequelize.define('participation', {
  participation_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

Participation.hasMany(Events); //import events foreign key (events_uuid)
Participation.hasMany(User); //import users foreign key (users_uuid)

// create the table in db

Participation.sync({force: false})
  .then( () => {
    console.log('Participation table created!');
  })
  .catch( (err) => console.error('In PARTICIPATION table', err));

module.exports = Participation;
