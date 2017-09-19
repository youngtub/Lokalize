// import {User} from './userSchema';

const Event = sequelize.define('event', {
  event_ID: Sequelize.UUID,
  name: Sequelize.STRING,
  date: Sequeqlize.DATE,
  location: Sequelize.STRING, // maybe ARRAY?
  capacity: Sequelize.INTEGER,
  creator: Sequelize.STRING //username OR userID?
});

Event.belongsTo(User); //defining one user to many event relationship

export default Event;
