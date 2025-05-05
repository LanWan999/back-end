const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    stock: Number,
    type: {
        type: String,
        enum: ['book', 'plushy', 'apparel'], // Add more as needed
        required: true
    },
    author: String, // only for books
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }] // only for books
});

module.exports = mongoose.model('Product', productSchema);