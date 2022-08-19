const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },    
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    passwordDB: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User;