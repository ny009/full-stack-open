import { useState } from 'react'
// import Filter from './components/Filter'
// import PersonForm from './components/PersonForm'
// import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const addName = (e) => {
    e.preventDefault()
    const isNotNewPerson = persons.find((person) => person.name === newName || person.number === newNumber) 
    const newPersons = isNotNewPerson ? persons: [...persons, {name: newName , number: newNumber, id: persons.length+1}]
    setPersons(newPersons)
    setNewName('')
    setNewNumber('')
    if (isNotNewPerson) {
      alert(`${newName} or ${newNumber} is already added to phonebook`)
    }
  }

  const filterNames = ({target: {value}}) => {
    setFilter(value)
    const newFilteredPersons = persons.filter((person) => person.name.toUpperCase().includes(value.toUpperCase()))
    setFilteredPersons(newFilteredPersons)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with<input value={filter} onChange={e=>filterNames(e)}/>
        </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={e=>setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={e=>setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => <div key={person.id}> {person.name} {person.number}</div> )}
    </div>
  )
}

export default App