import {Movie} from '../../models/Movie.js'

export const getMovies = async (req, res) => {
    try {
        const allMovies = await Movie.findAll({
            attributes: ['name', 'image']
        })
        res.status(200).send(allMovies)
    } catch (error) {
        console.log(error)
    }
}