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

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

const tokenExtractor = (request, response, next) => {
  request.token = getTokenFrom(request)
  next()
}

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })

  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })

  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' })
  }

  console.error(error.message)
  next(error)
}

module.exports = {
  logMorgan,
  logMorganPostBody,
  errorHandler,
  tokenExtractor
}