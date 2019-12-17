import React, {useState} from 'react'
import { gql } from 'apollo-boost'
import { useApolloClient } from '@apollo/react-hooks'

const ME = gql`
{
  me {
    username
    favoriteGenre
  }
} 
`
const Recommend = (props) => {
  const [username, setUsername] = useState(null)
  const [favoriteGenre, setFavoriteGenre] = useState(null)
  const client = useApolloClient(ME)

  if (!props.show) {
    return null
  }
  if (props.result.loading) {
    return <div>loading...</div>
  }

  const getFavorite = async () => {
    const { data } = await client.query({
      query: ME
    })
    setUsername(data.me.username)
    setFavoriteGenre(data.me.favoriteGenre)
  }

  if (!username) {
    getFavorite()
  }
  const books = props.result.data.allBooks

  const favoriteBooks = () => {
    return books.filter(i => i.genres.indexOf(favoriteGenre) > -1)
  }

  return (
    <div>
      <h2>Recommendations</h2>
      <h4>User ({username}): Books in your favorite genre ({favoriteGenre})</h4>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {favoriteBooks().map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Recommend