import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'disney',
    'postgres',
    'hausofgaga', 
    {
    host: 'localhost',
    dialect: 'postgres',
  }
);