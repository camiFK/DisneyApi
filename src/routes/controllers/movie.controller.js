import {Movie} from '../../models/Movie.js'

export const getMovies = async (req, res) => {
    try {
        const allMovies = await Movie.findAll({
            attributes: ['title', 'image', 'released']
        })
        res.status(200).send(allMovies)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const postMovie = async (req, res) => {
    try {
        let {title, image, released, rating} = req.body;

        const newMovie = await Movie.create({
            title, image, released, rating
        })

        res.status(201).send(newMovie)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateMovie = async (req, res) => {
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

export const deleteMovie = async (req, res) => {
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