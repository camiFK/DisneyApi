const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const MovieGenre = sequelize.define('movie_genre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = MovieGenre;