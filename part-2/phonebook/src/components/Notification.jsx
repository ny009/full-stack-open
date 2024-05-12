const Notification = ({message}) => {
  const error = message.includes('Failed')
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