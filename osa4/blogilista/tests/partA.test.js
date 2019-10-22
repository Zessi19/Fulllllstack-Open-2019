const listHelper = require('../utils/list_helper')
const testData = require('./testData')

// 4.3 //
describe('dummy', () => {
  test('Dummy func: return one', () => {
    const result = listHelper.dummy(testData.blogs)
    expect(result).toBe(1)
  })
})

// 4.4 //
describe('totalLikes', () => {
  test('Test: empty bloglist', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('Test: blogsSingle', () => {
    const result = listHelper.totalLikes(testData.blogsSingle)
    expect(result).toBe(80)
  })

  test('Test: blogsCornerCase', () => {
    const result = listHelper.totalLikes(testData.blogsCornerCase)
    expect(result).toBe(30)
  })

  test('Test: blogs', () => {
    const result = listHelper.totalLikes(testData.blogs)
    expect(result).toBe(36)
  })
})

// 4.5 //
describe('favoriteBlog', () => {
  test('Test: empty bloglist', () => {
    const result = listHelper.favoriteBlog([])
    expect(result).toEqual(undefined)
  })

  test('Test: blogsSingle', () => {
    const target = {
      title: "MacGyverin seikkailut",
      author: "Travis Takatukka",
      likes: 80
    }
    const result = listHelper.favoriteBlog(testData.blogsSingle)
    expect(result).toEqual(target)
  })

  test('Test: blogsCornerCase', () => {
    const target = [
      {
        title: "Blogi 3",
        author: "Cello",
        likes: 10
      },
      {
        title: "Blogi 5",
        author: "Aapeli",
        likes: 10
      }
    ]

    const result = listHelper.favoriteBlog(testData.blogsCornerCase)
    expect(target).toContainEqual(result)
  })

  test('Test: blogs', () => {
    const target = {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    }
    const result = listHelper.favoriteBlog(testData.blogs)
    expect(result).toEqual(target)
  })
})

// 4.6 //
describe('mostBlogs', () => {
  test('Test: empty bloglist', () => {
    const result = listHelper.mostBlogs([])
    expect(result).toEqual(undefined)
  })

  test('Test: blogsSingle', () => {
    const target = {
      author: "Travis Takatukka",
      blogs: 1
    }
    const result = listHelper.mostBlogs(testData.blogsSingle)
    expect(result).toEqual(target)
  })

  test('Test: blogsCornerCase', () => {
    const target = [
      {
        author: "Aapeli",
        blogs: 2
      },
      {
        author: "Bertta",
        blogs: 2
      }
    ]

    const result = listHelper.mostBlogs(testData.blogsCornerCase)
    expect(target).toContainEqual(result)
  })

  test('Test: blogs', () => {
    const target = {
      author: "Robert C. Martin",
      blogs: 3
    }
    const result = listHelper.mostBlogs(testData.blogs)
    expect(result).toEqual(target)
  })
})

// 4.7 //
describe('mostLikes', () => {
  test('Test: empty bloglist', () => {
    const result = listHelper.mostLikes([])
    expect(result).toEqual(undefined)
  })

  test('Test: blogsSingle', () => {
    const target = {
      author: "Travis Takatukka",
      likes: 80
    }
    const result = listHelper.mostLikes(testData.blogsSingle)
    expect(result).toEqual(target)
  })

  test('Test: blogsCornerCase', () => {
    const target = [
      {
        author: "Aapeli",
        likes: 10
      },
      {
        author: "Bertta",
        likes: 10
      },
      {
        author: "Cello",
        likes: 10
      }
    ]
    const result = listHelper.mostLikes(testData.blogsCornerCase)
    expect(target).toContainEqual(result)
  })

  test('Test: blogs', () => {
    const target = {
      author: "Edsger W. Dijkstra",
      likes: 17
    }
    const result = listHelper.mostLikes(testData.blogs)
    expect(result).toEqual(target)
  })
})
