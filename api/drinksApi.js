const express = require('express')
const { getDrinks, getDrinkById, createDrink, updateDrink, deleteDrink } = require('../controllers/drinkController')
const authMiddleware = require('../middlewares/authMiddleware')


const router = express.Router()

router.get('/', getDrinks)
router.get('/:id', getDrinkById)
router.post('/', authMiddleware, createDrink)
router.put('/:id', authMiddleware, updateDrink)
router.delete('/:id', authMiddleware, deleteDrink)

module.exports = router