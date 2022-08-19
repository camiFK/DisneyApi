const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username})
    const passwordOK = user === null 
    ? false 
    : await bcrypt.compare(password, user.passwordDB)

    if(!user && !passwordOK){
        return res.status(401).json({error: 'invalid user or password'})
    }
})