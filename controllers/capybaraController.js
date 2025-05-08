const Capybara = require('../models/capybaraModel')

const getCapybaras = async (req, res) => {
    try {
        const capybaras = await Capybara.find()

        res.send(capybaras)

    } catch (error) {
        res.status(500).send(error)
    }
}


const getCapybaraById = async (req, res) => {
    try {
        const { id } = req.params
        const capybara = await Capybara.findById(id)
        if (!capybara) {
            return res.status(404).send({ error: 'capybara not found' })
        }

        res.send(capybara)
        
    } catch (error) {
        res.status(500).send(error)
    }
}


const createCapybara = async (req, res) => {
    try {
        console.log('REQ.BODY:', req.body)
        const capybara = new Capybara(req.body)
        await capybara.save()
        res.send(capybara)

    } catch (error) {
        console.error('CREATE CAPYBARA ERROR:', error)
        res.status(500).send(error)
    }
}


const updateCapybara = async (req, res) => {
    try {
        const { id } = req.params

        const updatedCapybara = await Capybara.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!updatedCapybara) {
            return res.status(404).send({ error: 'Capybara not found' })
        }

        res.send(updatedCapybara)

    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteCapybara = async (req, res) => {
    try {
        const { id } = req.params
        const deletedCapybara = await Capybara.findByIdAndDelete(id)

        if (!deletedCapybara) {
            return res.status(404).send({ error: 'Capybara not found.' })
        }

        res.send({ message: 'Capybara record was removed', data: deletedCapybara })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getCapybaras,
    getCapybaraById,
    createCapybara,
    updateCapybara,
    deleteCapybara,
}