import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'

const Login = function ({ username, onLogin, onInput}) {
    return (
      <div className="presentational-login">
        <Row> <br/> </Row>
        <Row>
          <Col lg={8} lgOffset={2}>
            <p>Enter your username to login</p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} lgOffset={2}>
            <FormControl className="" value={username} type="text" placeholder="Normal text" onChange={onInput} />
          </Col>
        </Row>
        <Row> <br /> </Row>
        <Row>
          <Col lg={12}>
            <Button bsStyle="primary" onClick={onLogin}>Login</Button>
          </Col>
        </Row>
      </div>
    )
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired
}

export default Login
