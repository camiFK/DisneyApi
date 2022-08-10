import {Router} from 'express'
import { getCharacters, postCharacter } from './controllers/character.controller.js'

const router = Router()

router.get('/characters', getCharacters)
router.post('/characters', postCharacter)
router.put('/characters',)
router.delete('/characters',)
router.get('/characters/:id',);


export default router;