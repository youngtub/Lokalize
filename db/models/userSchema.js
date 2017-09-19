// import {sequelize} from 'sequelize';

const User = sequelize.define('user', {
  user_ID: Sequelize.UUID,
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

export default User;