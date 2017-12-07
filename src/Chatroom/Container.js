import React, { Component } from 'react'
import PresentationalChatroom from './Component'

class Chatroom extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            isLogged: false
        }
    }

    onLoginButtonClick () {
        console.log(this.state)
    }

    onUsernameInput (e) {
        this.setState({ username: e.target.value })
    }

    render () {
        return (
            <div className="container-Chatroom">
                {
                    PresentationalChatroom({
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

export default Chatroom;
