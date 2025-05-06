const OpeningHour = require('../models/openingHourModel')

const getOpeningHours = async (req, res) => {
    try {
        const openingHours = await OpeningHour.find()            

        res.send(openingHours)

    } catch (error) {
        res.status(500).send(error)
    }
}


const getOpeningHourById = async (req, res) => {
    try {
        const { id } = req.params
        const openingHour = await OpeningHour.findById(id)        
        if (!openingHour) {
            return res.status(404).send({ error: 'Opening Hour not found' })
        }

        res.send(openingHour)
        
    } catch (error) {
        res.status(500).send(error)
    }
}


const createOpeningHour = async (req, res) => {
    try {
        const openingHour = new OpeningHour(req.body)
        await openingHour.save()
        res.send(openingHour)

    } catch (error) {
        res.status(500).send(error)
    }
}


const updateOpeningHour = async (req, res) => {
    try {
        const { id } = req.params

        const updatedOpeningHour = await OpeningHour.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!updatedOpeningHour) {
            return res.status(404).send({ error: 'Opening Hour not found' })
        }

        res.send(updatedOpeningHour)

    } catch (error) {
        res.status(500).send(error)
    }
}


const deleteOpeningHour = async (req, res) => {
    try {
        const { id } = req.params
        const deletedOpeningHour = await OpeningHour.findByIdAndDelete(id)

        if (!deletedOpeningHour) {
            return res.status(404).send({ error: 'Opening Hour not found.' })
        }

        res.send({ message: 'Opening Hour record was removed', data: deletedOpeningHour })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getOpeningHours,
    getOpeningHourById,
    createOpeningHour,
    updateOpeningHour,
    deleteOpeningHour
}