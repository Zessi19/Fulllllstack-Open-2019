const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./supertest_helper')

const api = supertest(app)
const Blog = require('../models/blog')

describe('Osa 4 part B tests:', () => {

  // Initialise
  beforeEach(async () => {
    await Blog.deleteMany({})

    const blogObjects = helper.initialBlogs
      .map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)
  })

  describe('GET api/blogs', () => {

    test('Blogs return type JSON (4.8)', async () => {
      await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('Every initialised blog returned (4.8)', async () => {
      const response = await api.get('/api/blogs')
      expect(response.body.length).toBe(helper.initialBlogs.length)
    })

    test('Check identifier field named "id" (4.9)', async () => {
      const response = await api.get('/api/blogs')     
      response.body.forEach( blog => {
        expect(blog.id).toBeDefined()
      })
    })
  })

  describe('POST api/blogs', () => {

    test('Add new default blog (4.10)', async () => {
      const newBlog = {
        title: 'Test-123',
        author: 'Travis Takatukka',
        url: "https://qwerty-blog.com",
        likes: 666
      }
  
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
  
      const response = await api.get('/api/blogs')
      expect(response.body.length).toBe(helper.initialBlogs.length + 1)

      for (var blog of response.body) {
        delete blog.id
      }
      expect(response.body).toContainEqual(newBlog)
    })

    test('Add new blog, "likes" default zero (4.11)', async () => {
      const newBlog = {
        title: 'Test-123',
        author: 'Travis Takatukka',
        url: "https://qwerty-blog.com"
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
      
      const response = await api.get('/api/blogs')

      var checkLikes
      for (var blog of response.body) {
        if (blog.title === 'Test-123' && blog.author === 'Travis Takatukka' && blog.url === 'https://qwerty-blog.com') {
          checkLikes = blog.likes
        }
      }

      expect(checkLikes).toBe(0)
    })

    test('Add new blog, "title" and "url" undefined, status 400 (4.12)', async () => {
      const newBlog = {
        author: 'Travis Takatukka',
        likes: 666
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
      
      const response = await api.get('/api/blogs')
      expect(response.body.length).toBe(helper.initialBlogs.length)
    })
  })


  describe('DELETE api/blogs/:id', () => {

    test('Delete single blog (4.13)', async () => {
      const resInit = await api.get('/api/blogs')
      const blogToDelete = resInit.body[0]

      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)

      const resFinal = await api.get('/api/blogs')  
      expect(resFinal.body.length).toBe(helper.initialBlogs.length - 1)  
      expect(resFinal.body).not.toContainEqual(blogToDelete)
    })
  })

  describe('UPDATE api/blogs/:id', () => { 

    test('Update single blog (4.14)', async () => {
      const resInit = await api.get('/api/blogs')
      const blogToUpdate = resInit.body[0]

      const updatedData = {
        title: "UPDATE TEST",
        author: "Travis Takatukka",
        url: "https://test-test-test.com",
        likes: 0  
      }

      const resBlogFinal = await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .send(updatedData)
        .expect(200)

      delete resBlogFinal.body.id
      expect(resBlogFinal.body).toEqual(updatedData)
    })
  })

  describe('Dummy to reset database', () => {
    test('Dummy test', async () => {
      expect(0).toBe(0)
    })
  })

  afterAll(() => {
    mongoose.connection.close()
  })
})