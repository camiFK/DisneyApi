require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'disney',
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: 'localhost',
    dialect: 'postgres',
  }
  );


module.exports = sequelize;