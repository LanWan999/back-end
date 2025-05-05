const Dessert = require('../models/dessertModel')

const getDesserts = async (req, res) => {
    try {
        const desserts = await Book.find()

        res.send(desserts)

    } catch (error) {
        res.status(500).send(error)
    }
}


const getDessertById = async (req, res) => {
    try {
        const { id } = req.params
        const dessert = await Dessert.findById(id)
        if (!dessert) {
            return res.status(404).send({ error: 'dessert not found' })
        }

        res.send(dessert)
        
    } catch (error) {
        res.status(500).send(error)
    }
}


const createDessert = async (req, res) => {
    try {
        console.log('REQ.BODY:', req.body)
        const dessert = new Dessert(req.body)
        await dessert.save()
        res.send(dessert)

    } catch (error) {
        console.error('CREATE BOOK ERROR:', error)
        res.status(500).send(error)
    }
}


const updateDessert = async (req, res) => {
    try {
        const { id } = req.params

        const updatedDessert = await Dessert.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!updatedDessert) {
            return res.status(404).send({ error: 'Dessert not found' })
        }

        res.send(updatedDessert)

    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteDessert = async (req, res) => {
    try {
        const { id } = req.params
        const deletedDessert = await Dessert.findByIdAndDelete(id)

        if (!deletedDessert) {
            return res.status(404).send({ error: 'Dessert not found.' })
        }

        res.send({ message: 'Dessert record was removed', data: deletedDessert })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getDesserts,
    getDessertById,
    createDessert,
    updateDessert,
    deleteDessert,
}