const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'disney',
  'postgres',
  'hausofgaga', 
  {
    host: 'localhost',
    dialect: 'postgres',
  }
  );


module.exports = sequelize;