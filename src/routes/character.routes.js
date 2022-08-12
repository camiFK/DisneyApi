const express = require('express');
const router = express.Router();
const characterController = require('./controllers/characterController')

router.get('/characters', characterController.getCharacters)
router.post('/characters', characterController.postCharacter)
router.put('/characters/:id', characterController.updateCharacter)
router.delete('/characters/:id', characterController.deleteCharacter)
router.get('/characters/:id', characterController.getCharacter);

module.exports = router;