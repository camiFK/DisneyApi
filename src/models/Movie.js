const {DataTypes} = require('sequelize')
const sequelize = require('../database/db')

const Movie = sequelize.define('movie', {
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://i.insider.com/5dc9d9833afd3716de4cb919?width=750&format=jpeg&auto=webp" ,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    released: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    }
})

module.exports = Movie;