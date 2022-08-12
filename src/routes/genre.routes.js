import {Router} from 'express'
import {postGenre, getGenre} from './controllers/genre.controller.js'

const router = Router()

router.get('/genre', getGenre)
router.post('/genre', postGenre)


export default router;