const express = require('express')
const { getDesserts, getDessertById, createDessert, updateDessert, deleteDessert } = require('../controllers/dessertController')
const authMiddleware = require('../middlewares/authMiddleware')


const router = express.Router()

router.get('/', getDesserts)
router.get('/:id', getDessertById)
router.post('/', authMiddleware, createDessert)
router.put('/:id', authMiddleware, updateDessert)
router.delete('/:id', authMiddleware, deleteDessert)

module.exports = router