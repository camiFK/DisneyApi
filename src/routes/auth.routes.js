const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController')

router.post('/auth/register', authController.signUp)
router.post('/auth/login', authController.signIn)

module.exports = router;