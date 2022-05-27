import dotenv from 'dotenv'
import express from 'express'
import standingRoutes from './routes/standingRoutes.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running ...')
})

app.use('/v1/api/', standingRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
