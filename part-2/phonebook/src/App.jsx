import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import service from './services/names'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')

  const showNotification = (newMessage) => {
    setMessage(newMessage)
    setTimeout(() => setMessage(''), 2000)
  }

  const addName = (newName, newNumber) => {
    const isNotNewPerson = persons.find((person) => person.name === newName)
    let newPerson = {name: newName, number: newNumber}
    if (isNotNewPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        service.update(isNotNewPerson.id, newPerson)
        .then(res => {
          setPersons(persons.map(person => person.id === res.id ? {...person, number : res.number}: person))
          showNotification(`Updated ${newName}'s Number to ${newNumber}`)
        })
      }
      return
    } 
    service.create(newPerson).then(res => {
      setPersons([...persons, res])
      showNotification(`Added ${newName}`)
    })
  }

  const deleteName = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      service.del(id)
      .then(res => {
        setPersons(persons.filter(person => (person.id!== id)))
        showNotification(`Deleted ${name}`)
      })
      .catch(() => {
        showNotification(`Information of ${name} has already been removed from server`)
      })
    }
  }

  useEffect(() => {
    service.getAll().then(res => setPersons(res))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Add a new</h3>
      <PersonForm onSubmit={addName} />
      <h3>Numbers</h3>
      <Persons 
        persons={persons.filter((person) => person.name.toUpperCase().includes(filter.toUpperCase()))} 
        deleteName={deleteName} 
      />
    </div>
  )
}

export default App