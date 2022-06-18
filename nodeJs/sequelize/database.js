const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  dialect: 'postgres',
  port: 5432,
  logging: true
});

module.exports = sequelize

//Testing DB connection...
async function test(){
  try {
    let result = await sequelize.authenticate()
    console.log('Sequelize was sucessful connecting to the database!');
  } catch (error) {
    console.error('Error while connecting to the database!');
    console.error(error)
    process.exit();
  }
}
test();