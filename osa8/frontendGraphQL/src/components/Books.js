import React, {useState} from 'react'

const Books = (props) => {
  const [genre, setGenre] = useState('all')

  if (!props.show) {
    return null
  }
  if (props.result.loading) {
    return <div>loading...</div>
  }

  const books = props.result.data.allBooks

  const allGenreElements = [].concat.apply(['all'], books.map(i => i.genres))
  const uniqueGenres = Array.from(new Set(allGenreElements))

  const genreButtons = () => {
    return uniqueGenres.map( i =>
    <button key={i} onClick={() => setGenre(i)}>{i}</button>
    )
  }

  const filteredBooks = () => {
    if (genre === 'all') {
      return books
    }
      return books.filter(i => i.genres.indexOf(genre) > -1)
  }

  return (
    <div>
      <h2>books</h2>

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
          {filteredBooks().map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div>
        {genreButtons()}
      </div>
    </div>
  )
}

export default Books