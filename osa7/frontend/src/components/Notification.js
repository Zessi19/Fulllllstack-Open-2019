import React from 'react'
import { connect } from 'react-redux'
import '../index.css'

const Notification = (props) => {
  if (props.notification.error === null && props.notification.alert === null) {
    return null
  }

  if (props.notification.error === null) {
    return (
      <div className="alert">
        {props.notification.alert}
      </div>
    )
  }

  return (
    <div className="error">
      {props.notification.error}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { notification: state.notification }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification