const express = require('express')
const { getCapybaras, getCapybaraById, createCapybara, updateCapybara, deleteCapybara } = require('../controllers/capybaraController')
const authMiddleware = require('../middlewares/authMiddleware')


const router = express.Router()

router.get('/', getCapybaras)
router.get('/:id', getCapybaraById)
router.post('/', authMiddleware, createCapybara)
router.put('/:id', authMiddleware, updateCapybara)
router.delete('/:id', authMiddleware, deleteCapybara)

module.exports = router