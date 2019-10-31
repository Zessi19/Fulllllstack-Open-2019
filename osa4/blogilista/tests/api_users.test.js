const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const User = require('../models/user')

const initialUsers = [
  {
    "username": "uName1",
    "name": "n1",
    "password": "qwerty"
  },
  {
    "username": "uName2",
    "name": "n2",
    "password": "qwerty"
  }
]

describe('Osa 4 Part D tests:', () => {

  // Initialise
  beforeEach(async () => {
    await User.deleteMany({})

    const userObjects = initialUsers.map(i => new User(i))
    const promiseArray = userObjects.map(i => i.save())
    await Promise.all(promiseArray)
  })

  describe('User.username:', () => {

    test('Not-unique username (4.16)', async () => {
      const newUser = {
        username: 'uName1',
        name: 'test',
        password: 'qwerty',
      }

      const response1 = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(response1.body.error).toContain('`username` to be unique')
    
      const response2 = await api.get('/api/users')
      expect(response2.body.length).toBe(initialUsers.length)
    })

    test('Username undefined (4.16)', async () => {
      const newUser = {
        name: 'test',
        password: 'qwerty',
      }

      const response1 = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(response1.body.error).toContain('`username` is required')
    
      const response2 = await api.get('/api/users')
      expect(response2.body.length).toBe(initialUsers.length)
    })

    test('Username.length < 3 (4.16)', async () => {
      const newUser = {
        username: 'aa',
        name: 'test',
        password: 'qwerty',
      }

      const response1 = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(response1.body.error).toContain('shorter than the minimum allowed length (3)')
    
      const response2 = await api.get('/api/users')
      expect(response2.body.length).toBe(initialUsers.length)
    })
  })

  describe('User.password:', () => {

    test('Password undefined (4.16)', async () => {
      const newUser = {
        username: 'uName3',
        name: 'test',
      }

      const response1 = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(response1.body.error).toEqual('Password missing')
    
      const response2 = await api.get('/api/users')
      expect(response2.body.length).toBe(initialUsers.length)
    })

    test('Password.length < 3 (4.16)', async () => {
      const newUser = {
        username: 'uName3',
        name: 'test',
        password: 'qw',
      }

      const response1 = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(response1.body.error).toEqual('Password must be atleast 3 characters long')
    
      const response2 = await api.get('/api/users')
      expect(response2.body.length).toBe(initialUsers.length)
    })
  })

  afterAll(() => {
    mongoose.connection.close()
  })
})