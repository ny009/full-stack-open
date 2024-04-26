const Total = ({parts}) => {
  const total = parts.reduce((accumulator, currVal) => accumulator + (currVal?.exercises || 0), 0)
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  )
}
export default Total