const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        part2={part2} 
        part3={part3} 
      />
      <Total 
        part1={part1} 
        part2={part2} 
        part3={part3}
      />
    </div>
  )
}
const Header = ({course}) => <h1> {course} </h1>

const Part = ({name, exercise}) => <p>{name} {exercise}</p>

const Content = (props) => (
  <>
    <Part name={props.part1.name} exercise={props.part1.exercises}/>
    <Part name={props.part2.name} exercise={props.part2.exercises}/>
    <Part name={props.part3.name} exercise={props.part3.exercises}/>
  </>
)

const Total = ({part1, part2, part3}) => <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>

export default App