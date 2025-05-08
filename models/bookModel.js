const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    
    author: {
        type: String,
        required: true,
        unique: true,
    },
    
    cover: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
        unique: true,
    },
    
    genres: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Genre',
        required: true,
    },

    price: {
        type: Number,
        required: true,
    }

}, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)

module.exports = Book