const express = require('express')
const morgan = require("morgan")
const cors = require('cors')

const characterRoutes = require('./routes/character.routes')
const movieRoutes = require('./routes/movies.routes')
const genreRoutes = require('./routes/genre.routes')
const authRoutes = require('./routes/auth.routes')

const Character = require("./models/Character")
const Movie  = require("./models/Movie")
const Genre = require('./models/Genre')
const CharacterMovie = require('./models/Character-Movie')
const MovieGenre = require('./models/Movie-Genre')

const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));


app.use(characterRoutes)
app.use(movieRoutes)
app.use(genreRoutes)
app.use(authRoutes)

Character.belongsToMany(Movie, {through: CharacterMovie});
Movie.belongsToMany(Character, {through: CharacterMovie});

Genre.belongsToMany(Movie, {through: MovieGenre});
Movie.belongsToMany(Genre, {through: MovieGenre});

module.exports = app;