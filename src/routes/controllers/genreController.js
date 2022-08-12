const Genre = require("../../models/Genre.js")

const postGenre = async (req, res) => {
    try {
        let {name, image} = req.body;

        const newGenre = await Genre.create({
            name,
            image
        })

        res.status(201).send(newGenre)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getGenre = async (req, res) => {
    try {
        const allGenres = await Genre.findAll({
            attributes: ['name', 'image']
        })
        res.status(200).send(allGenres)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    postGenre,
    getGenre
}