import axios from 'axios'
import {Character} from '../../models/Character.js'

export const getCharacters = async (req, res) => {
    try {

        const allCharacters = await Character.findAll({
            attributes: ['name', 'image']
        })

        res.status(200).send(allCharacters)
    } catch (error) {
        console.log(error)
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
        console.log(error)
    }
}
