import { Character } from "../models/Character.js";
import { Movie } from "../models/Movie.js";
import { Genre } from "../models/Genre.js";

Character.belongsToMany(Movie, {through: 'character_movie'});
Movie.belongsToMany(Character, {through: 'character_movie'});

Genre.belongsToMany(Movie, {through: 'genre_movie'});
Movie.belongsToMany(Genre, {through: 'genre_movie'});

export { Character, Movie, Genre };