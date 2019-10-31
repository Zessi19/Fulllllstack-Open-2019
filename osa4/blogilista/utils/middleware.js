const morgan = require('morgan')
const logger = require('./logger')

const logMorgan = (app) => {
  app.use(morgan('tiny'))
}

const logMorganPostBody = (app) => {
  morgan.token('body', function (req, res) {
    return JSON.stringify(req.body)
  })
  app.use(morgan(':body',
    {skip: function (req, res) { return req.method !== 'POST' }}
  ))
}

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token =  authorization.substring(7)
  } else {
    request.token = null
  }
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'Malformatted id' })

  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({error: 'Invalid token'})
  }

  logger.error(error.message)
  next(error)
}

module.exports = {
  logMorgan,
  logMorganPostBody,
  tokenExtractor,
  unknownEndpoint,
  errorHandler
}