const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db')

const Character = sequelize.define('character', {
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://okdiario.com/img/2019/07/08/personajes-femeninos-de-disney-655x368.jpg" ,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    story: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {timestamps: false})

module.exports = Character;