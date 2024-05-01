import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const addName = (newName, newNumber) => {
    const isNotNewPerson = persons.find((person) => person.name === newName || person.number === newNumber) 
    const newPersons = isNotNewPerson ? persons: [...persons, {name: newName , number: newNumber, id: persons.length+1}]
    setPersons(newPersons)
    if (isNotNewPerson) {
      alert(`${newName} or ${newNumber} is already added to phonebook`)
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((res) => setPersons(res.data))
  }, [])

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