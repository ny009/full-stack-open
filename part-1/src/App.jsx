const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        part2={part2} 
        part3={part3} 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3}
      />
    </div>
  )
}
const Header = ({course}) => <h1> {course} </h1>

const Part = ({part, exercise}) => <p>{part} {exercise}</p>

const Content = (props) => (
  <>
    <Part part={props.part1} exercise={props.exercises1}/>
    <Part part={props.part2} exercise={props.exercises2}/>
    <Part part={props.part3} exercise={props.exercises3}/>
  </>
)

const Total = ({exercises1, exercises2, exercises3}) => <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

export default App