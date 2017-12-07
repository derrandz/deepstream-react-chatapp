import React from 'react'
import PropTypes from 'prop-types'

import LoginComponent from './Login'
import Room from './Room'

import './Style.css';

const Chatroom = function ({dsclient, isLogged, username, onLogin, onInput}) {
  return (
    <div className="presentational-Chatroom">
      { isLogged
        ? <Room dsclient={dsclient} username={username} />
        : LoginComponent({isLogged, onLogin, onInput})
      }
    </div>
  )
}

Chatroom.propTypes = {
  dsclient: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired
}

export default Chatroom
