import {Router} from 'express'
import { getCharacters, postCharacter, updateCharacter, deleteCharacter, getCharacter } from './controllers/character.controller.js'

const router = Router()

router.get('/characters', getCharacters)
router.post('/characters', postCharacter)
router.put('/characters/:id', updateCharacter)
router.delete('/characters/:id', deleteCharacter)
router.get('/characters/:id', getCharacter);



export default router;