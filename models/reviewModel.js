const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    body: {
        type: String,
        required: true,
    },

    favoriteCapybara: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Capybara',  
    },
}, { timestamps: true })

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review