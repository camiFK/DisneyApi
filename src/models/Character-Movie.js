import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const CharacterMovie = sequelize.define('character_movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})