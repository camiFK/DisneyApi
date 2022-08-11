import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const MovieGenre = sequelize.define('movie_genre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
}, {timestamps: false})