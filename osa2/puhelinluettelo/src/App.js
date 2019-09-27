import React, {useState, useEffect} from 'react'
import PersonService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const [alertMessage, setAlertMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  useEffect(() => {
    PersonService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const searchIndex = persons.findIndex(i => i.name.toLowerCase() === newName.toLowerCase())

    if (searchIndex === -1) { 
      const personObject = {
        name: newName,
        number: newNumber
      }

      PersonService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
       
      setAlertMessage(`Added contact ${newName}`)
      setTimeout(() => {setAlertMessage(null)}, 5000)

      setNewName('')
      setNewNumber('')

    } else {
      const message = `${persons[searchIndex].name} is already added to contacts. Do you want to replace the old number?`

      if (window.confirm(message)) {
        const person = persons.find(i => i.id === persons[searchIndex].id)
        const changedPerson = { ...person, number: newNumber }

        PersonService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(i => i.id !== changedPerson.id ? i : returnedPerson))

            setAlertMessage(`Updated contact ${changedPerson.name}`)
            setTimeout(() => {setAlertMessage(null)}, 5000)
          })
          .catch(error => {
            setPersons(persons.filter(i => i.id !== changedPerson.id))
  
            setErrorMessage(`Contact ${changedPerson.name} has already been removed from server`)
            setTimeout(() => {setErrorMessage(null)}, 5000)
          })
        
        setNewName('')
        setNewNumber('')
      }
    }
  }

  const deletePerson = (person) => {
    const message = `Are you sure to delete contact ${person.name}?`

    if (window.confirm(message)){
      PersonService
        .del(person.id)
        .then(returnedPerson => {
          setPersons(persons.filter(i => i.id !== person.id))

          setAlertMessage(`Deleted contact ${person.name}`)
          setTimeout(() => {setAlertMessage(null)}, 5000)

          setNewName('')
          setNewNumber('')
        })
    }    
  }

  const filterPersonsByName = () => {
    return persons.filter( i => 
      i.name.substring(0, nameFilter.length).toLowerCase() === nameFilter.toLowerCase()
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <AlertNotification message={alertMessage}/>
      <ErrorNotification message={errorMessage}/>

      <PersonNameFilter 
        nameFilter={nameFilter} 
        handleNameFilterChange={handleNameFilterChange}
      />   

      <h2>Add New Contact</h2>
      <PersonForm 
        newName = {newName}
        newNumber = {newNumber}
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange}
        addPerson = {addPerson}
      />

      <h2>Contacts</h2>
      <PersonList 
        personList={filterPersonsByName()}
        deletePerson={deletePerson}
      /> 
    </div>
  )
}

const PersonNameFilter = ({nameFilter, handleNameFilterChange}) => {
  return (
    <div>
      <div>Filter contacts by name:</div>
      <div><input value={nameFilter} onChange={handleNameFilterChange}/></div>
    </div>
  )
}

const PersonForm = ({newName, newNumber, handleNameChange, handleNumberChange, addPerson}) => {
  return (
    <form onSubmit={addPerson}>
      <div> Name: <input value={newName} onChange={handleNameChange}/></div>
      <div> Number: <input value={newNumber} onChange={handleNumberChange}/></div>
      <div><button type="submit"> Add </button></div>
    </form>
  )
}

const PersonList = ({personList, deletePerson}) => {
  const contentRows = () => {
    return personList.map( i => <Person key={i.id} person={i} deletePerson={deletePerson}/> )  
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}> 
      {contentRows()}  
    </ul>
  )
}

const Person = ({person, deletePerson}) => {
  return (
    <li>
      {person.name} :: {person.number} 
      <button onClick={ () => deletePerson(person)}> Delete </button>
    </li>
  )
}

const AlertNotification = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="alert"> {message} </div>
  )
}

const ErrorNotification = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="error"> {message} </div>
  )
}

export default App