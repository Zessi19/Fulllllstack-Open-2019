const lodash = require('lodash')

const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  const reduceFunc = (sum, element) => {
    return sum+element.likes
  }
  return blogs.reduce(reduceFunc, 0)
}

const favoriteBlog = (blogs) => {
  // Find most liked blog
  const findBlog = (argBlogs) => {
    const reduceFunc = (maxElement, element) => {
      if (maxElement.likes <= element.likes) {
        return element
      }
      return maxElement
    }
    return argBlogs.reduce(reduceFunc, argBlogs[0])
  }

  var favorite = findBlog(blogs)

  // Format output
  if (favorite !== undefined) {
    delete favorite._id
    delete favorite.url
    delete favorite.__v
  }
  return favorite
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return undefined
  }

  const countBlogs = lodash.countBy(blogs,"author")
  
  var maxKey = ""
  var maxKeyValue = 0

  for (var key in countBlogs) {
    if (maxKeyValue <= countBlogs[key]) {
      maxKey = key
      maxKeyValue = countBlogs[key]
    }
  }

  const output = {
    author: maxKey,
    blogs: maxKeyValue
  }
  return output;
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return undefined
  }

  const totalLikes = {}

  for (var i=0; i<blogs.length; i++) {
    var iAuthor = blogs[i].author
    var iLikes = blogs[i].likes

    if (iAuthor in totalLikes) {
      totalLikes[iAuthor] = totalLikes[iAuthor] + iLikes

    } else {
      totalLikes[iAuthor] = iLikes
    }
  }

  var maxLikeAuthor = ""
  var maxLikes = 0

  for (var key in totalLikes) {
    if (maxLikes <= totalLikes[key]) {
      maxLikeAuthor = key
      maxLikes = totalLikes[key]
    }
  }

  const output = {
    author: maxLikeAuthor,
    likes: maxLikes
  }

  return output;
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}