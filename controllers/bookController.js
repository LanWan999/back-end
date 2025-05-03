const Book = require('../models/bookModel')

const getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('genres', 'title description')

        res.send(books)

    } catch (error) {
        res.status(500).send(error)
    }
}


const getBookById = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id).populate('genres', 'title description')
        if (!book) {
            return res.status(404).send({ error: 'book not found' })
        }

        res.send(book)
        
    } catch (error) {
        res.status(500).send(error)
    }
}


const createBook = async (req, res) => {
    try {
        console.log('REQ.BODY:', req.body)
        const book = new Book(req.body)
        await book.save()
        res.send(book)

    } catch (error) {
        console.error('CREATE BOOK ERROR:', error)
        res.status(500).send(error)
    }
}


const updateBook = async (req, res) => {
    try {
        const { id } = req.params

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!updatedBook) {
            return res.status(404).send({ error: 'Book not found' })
        }

        res.send(updatedBook)

    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await Book.findByIdAndDelete(id)

        if (!deletedBook) {
            return res.status(404).send({ error: 'Book not found.' })
        }

        res.send({ message: 'Book record was removed', data: deletedBook })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
}