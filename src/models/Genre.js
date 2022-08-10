import {DataTypes, UUID} from 'sequelize';
import {sequelize} from '../database/database.js';

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