const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const CharacterMovie = sequelize.define('character_movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
}, {timestamps: false})

module.exports = CharacterMovie;