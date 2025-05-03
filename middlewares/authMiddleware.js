const process = require('process')
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '')
    console.log(token)
    console.log('JWT_SECRET:', process.env.JWT_SECRET)

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        console.log('Decoded Token:', decoded)
        req.user = decoded
        next()
    } catch (error) {
        console.error('Token verification failed:', error)
        res.status(400).json(error)
    }
}

module.exports = authMiddleware