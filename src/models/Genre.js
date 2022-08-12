const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const Genre = sequelize.define('genre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Genre;