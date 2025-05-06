const express = require('express')
const { getDesserts, getDessertById, createDessert, updateDessert, deleteDessert } = require('../controllers/dessertController')


const router = express.Router()

router.get('/', getDesserts)
router.get('/:id', getDessertById)
router.post('/', createDessert)
router.put('/:id', updateDessert)
router.delete('/:id', deleteDessert)

module.exports = router