const {Router} = require('express')
const movieController = require('./controllers/movieController.js')

const router = Router()

router.get('/movies', movieController.getMovies)
router.put('/movies/:id', movieController.updateMovie)
router.post('/movies', movieController.postMovie)
router.delete('/movies/:id', movieController.deleteMovie)

router.get('/movies/:id', movieController.getMovie);


module.exports = router;