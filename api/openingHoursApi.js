const express = require('express')
const { getOpeningHours, getOpeningHourById, createOpeningHour, updateOpeningHour, deleteOpeningHour } = require('../controllers/openingHoursController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', getOpeningHours)
router.get('/:id', getOpeningHourById)
router.post('/', authMiddleware, createOpeningHour)
router.put('/:id', authMiddleware, updateOpeningHour)
router.delete('/:id', authMiddleware, deleteOpeningHour)

module.exports = router