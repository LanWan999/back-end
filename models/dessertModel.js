const mongoose = require('mongoose')

const dessertSchema = new mongoose.Schema({
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

const Dessert = mongoose.model('Dessert', dessertSchema)

module.exports = Dessert