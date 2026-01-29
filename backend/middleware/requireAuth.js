const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    // verify if user is authenticated
    const {authorizationHeader} = req.headers

    if (!authorizationHeader) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorizationHeader.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET_KEY)
        // attach the user to the request object
        req.user = await User.findOne({_id}).select('_id')
        // when it goes to next middleware or controller, req.user will be available
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth