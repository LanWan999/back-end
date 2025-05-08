const mongoose = require('mongoose')

const capybaraSchema = new mongoose.Schema({
    
    image: {
        type: String,
        required: true,
        unique: true,
    },
    
    name: {
        type: String,
        required: true,
    },

    personality: {
        type: String,
        required: true,
    },

    favoriteSnack: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    }

}, { timestamps: true })

const Capybara = mongoose.model('Capybara', capybaraSchema)

module.exports = Capybara