require("dotenv").config();
const bcrypt = require('bcrypt')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    const {email, passwordDB} = req.body;
    try {
        if(!email && !passwordDB) { return res.status(401).json({error: 'invalid user or password'})}
    
        const encryptedPassword = await bcrypt.hash(passwordDB, 10);
    
        const newUser = await User.create({
            email,
            passwordDB: encryptedPassword
        })

        const token = jwt.sign({id: newUser.id},`${process.env.JWT_SECRET}`)
    
        console.log(newUser)
    
        res.json({auth: true, token})
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

const verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Sorry you are unauthorized' });
    
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    
    if(decoded.id) {
        next()
    } else {
        res.status(409).json({ auth: false, message: 'Sorry you are unauthorized' }) 
    }

}

const signIn = async (req, res) => {
    const {email, passwordDB} = req.body;
    try {
        if(!email && !passwordDB) { return res.status(401).json({error: 'invalid user or password'})}
    
        const user = await User.findOne({email});
        if(!user) { return res.status(401).json({error: 'user does not exist'})}
    
        const isPasswordValid = await bcrypt.compare(passwordDB, user.passwordDB);
        if(!isPasswordValid) { return res.status(401).json({auth: false, error: 'invalid user or password'})}
    
        const token = jwt.sign({id: user.id},`${process.env.JWT_SECRET}`)
    
        res.json({auth: true, token})
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    signUp,
    signIn,
    verifyToken
}