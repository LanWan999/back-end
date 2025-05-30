require('dotenv').config()
const express = require('express')
const process = require('process')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./db')

const colors = require('colors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'App is running!' })
})

app.use(cors({
    origin: 'https://capy-bookshop.netlify.app'
}));

const booksApiRoutes = require('./api/booksApi')
const genresApiRoutes = require('./api/genresApi')
const dessertsApiRoutes = require('./api/dessertsApi')
const drinksApiRoutes = require('./api/drinksApi')
const capybarasApiRoutes = require('./api/capybarasApi')
const reviewsApiRoutes = require('./api/reviewsApi')

const openingHoursApiRoutes = require('./api/openingHoursApi')

const cartApiRoutes = require('./api/cartApi')
const usersApiRoutes = require('./api/usersApi')

app.use('/books', booksApiRoutes)
app.use('/genres', genresApiRoutes)
app.use('/desserts', dessertsApiRoutes)
app.use('/drinks', drinksApiRoutes)
app.use('/capybaras', capybarasApiRoutes)
app.use('/reviews', reviewsApiRoutes)

app.use('/opening-hours', openingHoursApiRoutes)

app.use('/cart', cartApiRoutes)
app.use('/users', usersApiRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server is running on port: '.italic.brightMagenta + `${PORT}`.italic.yellow))


