import React from 'react'

const Notification = ({ alertMessage, errorMessage }) => {
  if (alertMessage === null && errorMessage === null) {
    return null
  }

  if (errorMessage === null) {
    return (
      <div className="alert">
        {alertMessage}
      </div>
    )
  }

  return (
    <div className="error">
      {errorMessage}
    </div>
  )
}

export default Notification