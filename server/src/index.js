import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import passport from 'passport'

import authRoutes from './routes/auth'
import noteRoutes from './routes/note'
import auth from './middleware/passport'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use(cors())

import keys from './config/keys'
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(passport.initialize())
auth(passport)

app.use('/api/v1', authRoutes)
app.use('/api/v1', noteRoutes)

app.use((req, res, next) => {
  res
    .status(404)
    .json({
      error: 'Not found'
    });
})

const port = app.get('port') || 8000
app.listen(port, () => console.log(`server has been started on ${port}`))