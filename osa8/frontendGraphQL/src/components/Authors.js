import React, {useState} from 'react'

const Authors = (props) => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  if (!props.show) {
    return null
  }
  if (props.result.loading) {
    return <div>loading...</div>
  }

  const authors = props.result.data.allAuthors

  const submit = async (e) => {
    e.preventDefault()
    await props.editAuthor({
      variables: { name, born }
    })
    setBorn('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Set Birthyear</h2>
      <form onSubmit={submit}>
        <div>
          Author name:
          <select value={name} onChange={({ target }) => setName(target.value)}>
            {authors.map(i =>
              <option key={i.id} value={i.name}>{i.name}</option>  
            )}
          </select>
        </div>
        <div>
          Birthyear:
          <input type='number' value={born}
            onChange={({ target }) => setBorn(parseInt(target.value))}
          />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Authors