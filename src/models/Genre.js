import {DataTypes} from 'sequelize';
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
}, {timestamps: false})

