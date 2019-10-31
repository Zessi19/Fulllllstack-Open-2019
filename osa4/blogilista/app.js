const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const loginRouter = require('./controllers/login')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')


logger.info('Connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error in connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'test') {
  middleware.logMorgan(app)
  middleware.logMorganPostBody(app)
}

app.use(middleware.tokenExtractor)

app.use('/api/login', loginRouter)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app