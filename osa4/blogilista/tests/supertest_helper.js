const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: "Blog-A",
    author: "A-etu A-suku",
    url: "https://aaa-blog.com",
    likes: 5
  },
  {
    title: "Blog-B",
    author: "B-etu B-suku",
    url: "https://bbb-blog.com",
    likes: 10
  },
  {
    title: "Blog-C",
    author: "C-etu C-suku",
    url: "https://ccc-blog.com",
    likes: 15
  },
  {
    title: "Blog-D",
    author: "D-etu D-suku",
    url: "https://ddd-blog.com",
    likes: 20
  }
]

module.exports = {
  initialBlogs
}