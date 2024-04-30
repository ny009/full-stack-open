import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [filter, setFilter] = useState('')

  const addName = (newName, newNumber) => {
    const isNotNewPerson = persons.find((person) => person.name === newName || person.number === newNumber) 
    const newPersons = isNotNewPerson ? persons: [...persons, {name: newName , number: newNumber, id: persons.length+1}]
    setPersons(newPersons)
    if (isNotNewPerson) {
      alert(`${newName} or ${newNumber} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Add a new</h3>
      <PersonForm onSubmit={addName} />
      <h3>Numbers</h3>
      <Persons persons={persons.filter((person) => person.name.toUpperCase().includes(filter.toUpperCase()))} />
    </div>
  )
}

export default App