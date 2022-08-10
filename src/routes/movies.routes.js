import {Router} from 'express'
import { getMovies, postMovie, updateMovie, deleteMovie } from './controllers/movie.controller.js'

const router = Router()

router.get('/movies', getMovies)
router.put('/movies/:id', updateMovie)
router.post('/movies', postMovie)
router.delete('/movies/:id', deleteMovie)


export default router;