const {Router} = require('express')
const genreController = require('./controllers/genreController.js')
const auth = require('./controllers/authController')

const router = Router()

router.get('/genre', auth.verifyToken, genreController.getGenre)

router.post('/genre', auth.verifyToken, genreController.postGenre)


module.exports = router;