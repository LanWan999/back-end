const express = require('express')
const { getDrinks, getDrinkById, createDrink, updateDrink, deleteDrink } = require('../controllers/drinkController')


const router = express.Router()

router.get('/', getDrinks)
router.get('/:id', getDrinkById)
router.post('/', createDrink)
router.put('/:id', updateDrink)
router.delete('/:id', deleteDrink)

module.exports = router