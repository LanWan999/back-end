const mongoose = require('mongoose')

const openingHourSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
    },
    openingTime: {
        type: String,
        required: true
    },
    closingTime: {
        type: String,
        required: true
    }
}, { timestamps: true })

const OpeningHour = mongoose.model('OpeningHour', openingHourSchema, 'opening-hours')

module.exports = OpeningHour