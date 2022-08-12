const {Router} = require('express')
const genreController = require('./controllers/genreController.js')

const router = Router()

router.get('/genre', genreController.getGenre)
router.post('/genre', genreController.postGenre)


module.exports = router;