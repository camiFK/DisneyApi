const {Router} = require('express')
const movieController = require('./controllers/movieController.js')
const auth = require('./controllers/authController')

const router = Router()

router.get('/movies', auth.verifyToken, movieController.getMovies)

router.put('/movies/:id', auth.verifyToken, movieController.updateMovie)

router.post('/movies', auth.verifyToken, movieController.postMovie)

router.delete('/movies/:id', auth.verifyToken, movieController.deleteMovie)

router.get('/movies/:id', auth.verifyToken, movieController.getMovie);


module.exports = router;