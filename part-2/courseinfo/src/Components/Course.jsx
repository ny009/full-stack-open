import Content from "./Content"
import Header from "./Header"

// eslint-disable-next-line no-unused-vars
const Course = ({course}) => (
    <>
      <Header header={course?.name}/>
      <Content parts={course?.parts} />
    </>
)

export default Course