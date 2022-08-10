import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Movie} from './Movie.js';

export const Genre = sequelize.define('genre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Genre.belongsToMany(Movie, {through: 'genre_movie'});