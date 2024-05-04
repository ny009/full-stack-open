const Notification = ({message}) => {
  const error = message.includes('Information of')
  if (!message) {
    return
  }
  return (
    <>
      {error ? 
        <div className="notification error">{message}</div>
        :
        <div className="notification success">{message}</div>
      }
    </>
  )
}

export default Notification