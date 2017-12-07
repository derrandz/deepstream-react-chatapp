import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PresentationalChatroom from './Component'

class Chatroom extends Component {
  constructor () {
    super()
    this.state = {
        username: '',
        isLogged: false
    }
  }

  async onLoginButtonClick () {
    await this.props.onLogin({ username: this.state.username })
    this.setState({ isLogged: true })
    console.log('Logged in')
  }

  onUsernameInput (e) {
    this.setState({ username: e.target.value })
  }

  render () {
    return (
      <div className="container-Chatroom">
        {
          PresentationalChatroom({
            dsclient: this.props.dsclient,
            onLogin: this.onLoginButtonClick.bind(this),
            onInput: this.onUsernameInput.bind(this),
            isLogged: this.state.isLogged,
            username: this.state.username
          })
        }
      </div>
    )
  }
}

Chatroom.propTypes = {
  dsclient: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired
}

export default Chatroom;
