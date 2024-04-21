const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
const Header = ({course}) => <h1> {course} </h1>

const Part = ({name, exercise}) => <p>{name} {exercise}</p>

const Content = (props) => (
  <>
    <Part name={props.parts[0].name} exercise={props.parts[0].exercises}/>
    <Part name={props.parts[1].name} exercise={props.parts[1].exercises}/>
    <Part name={props.parts[2].name} exercise={props.parts[2].exercises}/>
  </>
)

const Total = ({parts}) => <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

export default App