import dotenv from 'dotenv'
import express from 'express'
import standingRoutes from './routes/standingRoutes.js'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running ...')
})

app.use('/v1/api/', standingRoutes)

if (process.env.NODE_ENV === "production") {
    console.log("PRODUCTION MODE ACTIVE");
    app.use(express.static("./frontend/build"));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, './frontend/build','index.html'));
    })
}

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
