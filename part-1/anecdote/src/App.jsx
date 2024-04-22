import { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

const ShowAnecdote = ({name, index, anecdotes, votes}) => (
  <>
    <Header name={name} />
    <div>{anecdotes[index]}</div>
    <div>has {votes[index]} votes</div>
  </>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [max, setMax] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)

  // Referenced From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
  // used help of documentation of func example from the above link called "getRandomIntInclusive"

  const getRandomNumber = () => Math.floor(Math.random() * (anecdotes.length))

  const handleVotes = () => {
    const currentVotes = [...votes]
    currentVotes[selected] += 1
    setVotes(currentVotes)
    setMaxIndex(currentVotes[selected] > max ? selected : maxIndex)
    setMax(currentVotes[selected] > max ? currentVotes[selected] : max)
  }
  return (
    <div>
      <ShowAnecdote name="Anecdote of the day" index={selected} anecdotes={anecdotes} votes={votes}/>
      <div> 
        <button onClick={handleVotes}> vote</button>
        <button onClick={() => setSelected(getRandomNumber())}>next anecdote</button> 
      </div>
      <ShowAnecdote name="Anecdote with most votes" index={maxIndex} anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App