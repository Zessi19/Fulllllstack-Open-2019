const morgan = require('morgan')

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

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'Malformatted id' })

  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

module.exports = {
  logMorgan,
  logMorganPostBody,
  unknownEndpoint,
  errorHandler
}