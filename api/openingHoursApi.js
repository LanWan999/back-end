const express = require('express')
const { getOpeningHours, getOpeningHourById, createOpeningHour, updateOpeningHour, deleteOpeningHour } = require('../controllers/openingHoursController')

const router = express.Router()

router.get('/', getOpeningHours)
router.get('/:id', getOpeningHourById)
router.post('/', createOpeningHour)
router.put('/:id', updateOpeningHour)
router.delete('/:id', deleteOpeningHour)

module.exports = router