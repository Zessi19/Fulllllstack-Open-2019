const { ApolloServer, UserInputError, AuthenticationError, gql } = require('apollo-server')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const Author = require('./models/author')
const Book = require('./models/book')

// MONGOOSE
mongoose.set('useFindAndModify', false)
const JWT_SECRET = 'gsajghsakhcdukhrjgdsjlcsudchdskgcdsjvbsdbcmhsdbchsdvcjasbs'
const MONGODB_URI = 'mongodb+srv://joonas19:jiijii19@cluster0-g3oxv.mongodb.net/contact-app?retryWrites=true&w=majority'

console.log('Connecting to', MONGODB_URI)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error in connection to MongoDB:', error.message)
  })

// Type Definitions
const typeDefs = gql`
  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
  }

  type Book {
    title: String!
    author: Author!
    published: Int!
    id: ID!
    genres: [String!]!
  }

  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int!
  }

  type Query {
    authorCount: Int!
    bookCount: Int!
    allAuthors:[Author!]!
    allBooks(genre: String):[Book!]!
    me: User
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(
      name: String!
      setBornTo: Int!
    ): Author
    createUser(
      username: String!
      favoriteGenre: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
  }
`
// Resolvers
const resolvers = {
  Query: {
    authorCount: () => Author.collection.countDocuments(),
    bookCount: () => Book.collection.countDocuments(),    
    allAuthors: () => Author.find({}),
    allBooks: async (root, args) => {
      const books = await Book.find({}).populate('author')
      if (!args.genre) {
        return books
      }
      return books.filter(i => i.genres.indexOf(args.genre) > -1)
    },
    me: (root, args, context) => {
      return context.currentUser
    }
  },
  Author: {
      bookCount: async (root) => {
        const books = await Book.find({}).populate('author')
        return books.filter(i => i.author.name === root.name).length
      }
  },
  Mutation: {
    addBook: async (root, args, context) => {
      const author = await Author.findOne({name: args.author})
      const currentUser = context.currentUser
      let linkedAuthor = null
      let helpBook = null

      if (!currentUser) {
        throw new AuthenticationError("Not Authenticated")
      }

      try {
        if (!author) {
          const newAuthor = new Author({name: args.author, born: null})
          linkedAuthor = await newAuthor.save()
        } else {
          linkedAuthor = author
        }

        const newBookObj = {
          title: args.title,
          author: linkedAuthor,
          published: args.published,
          genres: args.genres
        }
        const newBook = new Book(newBookObj)
        helpBook = await newBook.save()

      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args
        })
      }
      return helpBook
    },
    editAuthor: async (root, args, context) => {
      const currentUser = context.currentUser
      if (!currentUser) {
        throw new AuthenticationError("Not Authenticated")
      }
      const author = await Author.findOne({name: args.name})
      if (!author) {
        return null
      }

      try {
        author.born = args.setBornTo
        await author.save()
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args
        })
      }
      return author
    },
    createUser: (root, args) => {
      const user = new User({username: args.username, favoriteGenre: args.favoriteGenre})
      return user.save()
        .catch(error => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          })
        })
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })
  
      if ( !user || args.password !== 'qwerty' ) {
        throw new UserInputError("Wrong Credentials")
      }
      const userForToken = {
        username: user.username,
        id: user._id,
      }
      return { value: jwt.sign(userForToken, JWT_SECRET) }
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), JWT_SECRET
      )
      const currentUser = await User.findById(decodedToken.id)
      return { currentUser }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
