const express = require('express');
const router = express.Router();
const characterController = require('./controllers/characterController')
const auth = require('./controllers/authController')

router.get('/characters', auth.verifyToken, characterController.getCharacters)

router.post('/characters', auth.verifyToken, characterController.postCharacter)

router.put('/characters/:id', auth.verifyToken, characterController.updateCharacter)

router.delete('/characters/:id', auth.verifyToken, characterController.deleteCharacter)

router.get('/characters/:id', auth.verifyToken, characterController.getCharacter);

module.exports = router;