const mongoose = require('mongoose')

const drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        unique: true,
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Drink = mongoose.model('Drink', drinkSchema)

module.exports = Drink