import app from './app.js'
import {sequelize} from './database/database.js'
import { Character } from "./models/Character.js";
import { Movie } from "./models/Movie.js";
import { Genre } from './models/Genre.js';
import {CharacterMovie} from './models/Character-Movie.js'
import {MovieGenre} from './models/Movie-Genre.js'

Character.belongsToMany(Movie, {through: CharacterMovie});
Movie.belongsToMany(Character, {through: CharacterMovie});

Genre.belongsToMany(Movie, {through: MovieGenre});
Movie.belongsToMany(Genre, {through: MovieGenre});

async function server() {
    try {
        await sequelize.sync({force: false}) // Syncronizes the database with the models
        app.listen(3001)
        console.log('Server running on port 3001')
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

server();