import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Chatroom from './Chatroom'
import {Grid, Row, Col} from 'react-bootstrap'

import eltonSquare from './elton-square.gif'
import './App.css'

class App extends Component {
  async deepstreamLogin ({ username, password }) {
    try {
      return await this.props.deepstreamClient.login({
        username, password
      })
    } catch (e) {
      console.error('Failed to login to deepstream server', e)
    }
  }

  componentWillUnmount () {
    this.props.deepstreamClient.close()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={eltonSquare} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <Row>
            <Col lg={12} >
              <Chatroom dsclient={this.props.deepstreamClient} onLogin={this.deepstreamLogin.bind(this)}/> 
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  deepstreamClient: PropTypes.object.isRequired,
}

export default App;
