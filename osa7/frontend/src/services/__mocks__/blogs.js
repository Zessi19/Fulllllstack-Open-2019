const blogs = [
  {
    id: "5dc9f43d40c7ed5748756489",
    title: "blogAAA",
    author: "authorAAA",
    url: "aaa.com",
    likes: 15,
    user: {
      username: "uName1",
      name: "n1",
      id: "5db8a9ba7a515248c21b94c9"
    }
  },
  {
    id: "5dc9f45440c7ed574875648a",
    title: "blogBBB",
    author: "authorBBB",
    url: "bbb.com",
    likes: 10,
    user: {
      username: "uName1",
      name: "n1",
      id: "5db8a9ba7a515248c21b94c9"
    }
  },
  {
    id: "5dc9f49840c7ed574875648b",
    title: "blogCCC",
    author: "authorCCC",
    url: "ccc.com",
    likes: 5,
    user: {
      username: "uName2",
      name: "n2",
      id: "5db8a9f87a515248c21b94ca"
    }
  },
  {
    id: "5dc9f4ac40c7ed574875648c",
    title: "blogDDD",
    author: "authorDDD",
    url: "ddd.com",
    likes: 0,
    user: {
      username: "uName2",
      name: "n2",
      id: "5db8a9f87a515248c21b94ca"
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

const setToken = () => {
  return Promise.resolve()
}

export default { getAll, setToken }