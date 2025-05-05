const Drink = require('../models/drinkModel')

const getDrinks = async (req, res) => {
    try {
        const drinks = await Book.find()

        res.send(drinks)

    } catch (error) {
        res.status(500).send(error)
    }
}


const getDrinkById = async (req, res) => {
    try {
        const { id } = req.params
        const drink = await Drink.findById(id)
        if (!drink) {
            return res.status(404).send({ error: 'drink not found' })
        }

        res.send(drink)
        
    } catch (error) {
        res.status(500).send(error)
    }
}


const createDrink = async (req, res) => {
    try {
        console.log('REQ.BODY:', req.body)
        const drink = new Drink(req.body)
        await drink.save()
        res.send(drink)

    } catch (error) {
        console.error('CREATE BOOK ERROR:', error)
        res.status(500).send(error)
    }
}


const updateDrink = async (req, res) => {
    try {
        const { id } = req.params

        const updatedDrink = await Drink.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!updatedDrink) {
            return res.status(404).send({ error: 'Drink not found' })
        }

        res.send(updatedDrink)

    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteDrink = async (req, res) => {
    try {
        const { id } = req.params
        const deletedDrink = await Drink.findByIdAndDelete(id)

        if (!deletedDrink) {
            return res.status(404).send({ error: 'Drink not found.' })
        }

        res.send({ message: 'Drink record was removed', data: deletedDrink })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getDrinks,
    getDrinkById,
    createDrink,
    updateDrink,
    deleteDrink,
}