const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

// mongo db uses _id, so we use that as jwt payload
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, { expiresIn: '3d' });
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await User.login(email, password); // creates a Mongo DB document
        // create a token
        const token = createToken(existingUser._id);

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await User.signup(email, password); // creates a Mongo DB document
        // create a token
        const token = createToken(newUser._id);

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = { loginUser, signupUser };