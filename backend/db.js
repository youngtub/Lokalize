var Sequelize = require('sequelize');

sequelize = new Sequelize('lokalize', 'sss4', 'starfish', {
  host: 'lokalize.cuh8jnsx4027.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

// const sequelize = new Sequelize('postgres://sss4:starfish@lokalize.cuh8jnsx4027.us-east-2.rds.amazonaws.com:5432/lokalize')
 //TODO look into why this wont connect with our AWS instance


// sequelize.query('select * from test')

  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
