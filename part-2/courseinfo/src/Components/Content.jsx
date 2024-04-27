import Total from "./Total"

const Part = ({name, exercise}) => <p>{name} {exercise}</p>

const Content = ({parts}) => {
  return (
    <>
      {[...parts].map((part) => 
        <Part key={part?.id} name={part?.name} exercise={part?.exercises}/>
      )}
      <Total parts={parts}/>
    </>
  )
}

export default Content


