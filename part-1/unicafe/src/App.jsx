import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
    return (
      <>
        <h1>statistics</h1>
        {all > 0 ? 
        <table>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={(good - bad) / all}/>
          <StatisticLine text="positive" value={`${(good / all) * 100} %`}/>
        </table> 
          :
        <div> No feedback given </div>
        }
     </>
    )
  }
  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={()=>setGood(good + 1)} text="good" />
        <Button onClick={()=>setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={()=>setBad(bad + 1)} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
      
    </div>
  )
}

export default App