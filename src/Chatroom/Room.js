import React, { Component } from 'react'
import PropTypes, { element } from 'prop-types'

import { Row, Col, Panel, FormGroup, FormControl, Button } from 'react-bootstrap'

import "./Style.css"

class Room extends Component {
  constructor () {
    super()

    this.state = {
      roomRecord: null,
      message: '',
      messages: [],
      users: [],
      inputMessageError: false
    }
  }
  
  componentDidMount() {
    this.fetchUsersStatus()

    const thisRef = this;
    setInterval(() => { thisRef.fetchUsersStatus() }, 5 * 1000)

    const roomRecord = thisRef.props.dsclient.record.getRecord('chatroom')

    roomRecord.subscribe('messages', messages => {
      console.log('messages were set to', messages)
      thisRef.setState({ messages })
    })

    thisRef.setState({ roomRecord })
  }
  
  async fetchUsersStatus () {
    const onlineUsers = await this.props.dsclient.presence.getAll()
    console.log(onlineUsers)
    this.setState({
      users: onlineUsers.map(username => ({
        username, status: 'on'
      }))
    })
  }

  onTyping (e) {
    this.setState({ message: e.target.value })
  }

  onSubmit () {
    const messages = this.state.messages.map(x => x)

    const thisRef = this
    thisRef.state.roomRecord.set('messages', messages.concat([{
      username: thisRef.props.username,
      body: thisRef.state.message
    }]), err => {
      if (err) {
        thisRef.state.inputMessageError = true
      } else {
        console.log('Successfully sent message')
      }
    })
  }

  render () {
    return (
      <div className="presentational-Room">
        <Row>
          <Col lg={4}>
            <Panel header="Users">
              <div className="to-left">
                <ul>
                  {
                    this.state.users.length > 0
                      ? this.state.users.map(user => <li> <strong> {user.username}:</strong> {user.status} </li>)
                      : <em> Nobody is connected </em>
                  }
                </ul>
              </div>
            </Panel>
          </Col>

          <Col lg={8}>
            <Row>
              <Col lg={12}>
                <Panel footer={
                  <FormGroup>
                    <FormControl disabled={this.state.inputMessageError} value={this.state.message} type="text" placeholder="Normal text" onChange={this.onTyping.bind(this)} />
                    <Button onClick={this.onSubmit.bind(this)}> Submit </Button>
                  </FormGroup>
                }>
                  <div className="to-left">
                    <ul>
                    {
                      this.state.messages.length > 0
                      ? this.state.messages.map(message => <Panel footer={<p className="text-muted small-text">{message.username}</p>}> {message.body} </Panel>)
                      : <em>No messages at the moment...</em>
                    }
                    </ul>
                  </div>
                </Panel>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

Room.propTypes = {
  dsclient: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
}

export default Room
