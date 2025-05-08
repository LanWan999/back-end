const express = require('express')
const { register, login, updateUser, getUsers, getUserById, deleteUser, updateUserRole, createUser } = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.put('/update', authMiddleware, updateUser)

router.get('/', authMiddleware, getUsers)
router.get('/:id', authMiddleware, getUserById)
router.post('/', authMiddleware, createUser)
router.delete('/:id', authMiddleware, deleteUser)
router.put('/:id/role', authMiddleware, updateUserRole)

module.exports = router