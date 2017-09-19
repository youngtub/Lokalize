import {User} from './userSchema';
import {Event} from './eventSchema';

const Participation = sequelize.define('participation', {
  userID: Sequelize.INTEGER, // do we need to explicitly declare this?
  eventID: Sequelize.INTEGER
});

// many to many relationship

Participation.hasMany(Event);
Participation.hasMany(User);

export default Participation;
