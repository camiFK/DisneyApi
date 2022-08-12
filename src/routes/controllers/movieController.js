const Movie = require('../../models/Movie.js')
const Genre = require('../../models/Genre.js')
const Character = require('../../models/Character.js')
const { Op } = require("sequelize")

const getMovies = async (req, res) => {
    try {
        const {name, genre} = req.query;

        const queries = {}
        const genresQuery = {}

        if (name) { queries.title = { [Op.like]: `%${name}%` }; }
        if (genre) { genresQuery.id = genre }

        const allMovies = await Movie.findAll({
            attributes: ['title', 'image', 'released'],
            where: queries,
             include: [{
               model: Genre,
               where: genresQuery,
               attributes: []
             }]
        })

       return res.send(allMovies)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const postMovie = async (req, res) => {
    try {
        let {title, image, released, rating, genre} = req.body;

        const newMovie = await Movie.create({
            title, image, released, rating
        })

        let movieSelected = await Genre.findAll({
            where: {
                name: genre,
            }
        })

        await newMovie.addGenres(movieSelected);

        res.status(201).send(newMovie)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const updateMovie = async (req, res) => {
    try {

        const {id} = req.params;
        const {title, image, released, rating} = req.body;

        const updated = await Movie.findByPk(id)

        title ? updated.title = title : null;
        image ? updated.image = image : null;
        released ? updated.released = released : null;
        rating ? updated.rating = rating : null;

        await updated.save()

        res.json({updated})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const deleteMovie = async (req, res) => {
    try {
        const {id} = req.params;

        await Movie.destroy({
            where: {
                id
            }
        })

        res.sendStatus(204)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getMovie = async (req, res) => {
    try {
        const {id} = req.params;

        const movie = await Movie.findOne({
            where: {
                id
            },
            include: {
                model: Character,
                attributes: ["name"],
                through: {
                    attributes: [],
                  },
            }

        })

        res.json(movie)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    getMovies,
    postMovie,
    updateMovie,
    deleteMovie,
    getMovie
}