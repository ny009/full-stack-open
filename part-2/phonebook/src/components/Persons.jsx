const Persons = ({persons, deleteName}) => {
  return (
    <>
      {persons.map(person => 
        <div key={person.id}> 
          <span>{person.name} </span>
          <span> {person.number} </span>
          <span> <button onClick={()=>deleteName(person.id, person.name)}> delete </button></span>
        </div>
      )}
    </>
  )
}

export default Persons