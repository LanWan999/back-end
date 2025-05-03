require('dotenv').config()
const express = require('express')
const process = require('process')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./db')

const colors = require('colors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'App is running!' })
})

const booksApiRoutes = require('./api/booksApi')
const genresApiRoutes = require('./api/genresAPI')

const usersApiRoutes = require('./api/usersAPI')

app.use('/books', booksApiRoutes)
app.use('/genres', genresApiRoutes)

app.use('/users', usersApiRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server is running on port: '.italic.brightMagenta + `${PORT}`.italic.yellow))


