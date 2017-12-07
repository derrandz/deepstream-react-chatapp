import React from 'react'
import PropTypes from 'prop-types'

import LoginComponent from './Login'
import RoomComponent from './Room'

import './Style.css';

const Chatroom = function ({isLogged, username, onLogin, onInput}) {
    return (
        <div className="presentational-Chatroom">
            { isLogged
                ? RoomComponent()
                : LoginComponent({isLogged, onLogin, onInput})
            }
        </div>
    )
}

Chatroom.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default Chatroom
