import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const { APP_PORT, APP_MONGO_USER, APP_MONGO_PASS } = process.env;

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_URL = `mongodb+srv://${APP_MONGO_USER}:${APP_MONGO_PASS}@cluster0.p1fnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(APP_PORT, () => {
        console.log(`Server running on port ${APP_PORT}`)
    })
}).catch((err) => {
    console.log(`Failed to database connect ${err}`)
})

