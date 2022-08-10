import axios from 'axios'
import {Character} from '../../models/Character.js'

export const getCharacters = async (req, res) => {
    try {

        const allCharacters = await Character.findAll({
            attributes: ['name', 'image']
        })

        res.status(200).send(allCharacters)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const postCharacter = async (req, res) => {
    try {
        let {name, image, age, weight, story, movies} = req.body

        const newCharacter = await Character.create({
            name, image, age, weight, story
        })
        
        res.status(200).send(newCharacter)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateCharacter = async (req, res) => {
    try {

        const {id} = req.params;
        const {name, image, age, weight, story, movies} = req.body;

        const updated = await Character.findByPk(id)

        name ? updated.name = name : null;
        image ? updated.image = image : null;
        age ? updated.age = age : null;
        weight ? updated.weight = weight : null;
        story ? updated.story = story : null;
        movies ? updated.movies = movies : null;

        await updated.save()

        res.json({updated})
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteCharacter = async (req, res) => {
    try {

        const {id} = req.params;

        await Character.destroy({
            where: {
                id
            }
        })

        res.sendStatus(204)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
