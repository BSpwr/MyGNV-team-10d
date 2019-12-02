import React from 'reactn';
import { Redirect } from 'react-router-dom';
import { Button, Form, Modal, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      email: '',
      password: '',
      invalidAttempt: false,
      showModal: false,
      loading: false,
      error: null,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null,
    });
  }
  login = (event) => {
    event.preventDefault();
    axios
      .post('/api/user/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.setGlobal({
          isAuthenticated: res.data.success,
          userEmail: res.data.email,
        });
        if (res.data.success) this.setState({ redirectToReferrer: true });
        else this.setState({ invalidAttempt: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.redirectToReferrer === true || this.global.isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <Button variant="primary" onClick={() => this.openModal()}>
            Login
        </Button>
        {this.state.invalidAttempt ? (
          <Alert
            variant='danger'
            style={{
              marginTop: '1em',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
                Invalid email or password. Please try again.
          </Alert>
        ) : null}
        <Modal show={this.openModal()} onHide={this.closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  type='Username'
                  placeholder='Enter Username'
                />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal()}>
                Close
            </Button>
            <Button onClick={this.login} variant='primary' type='submit'>
                Log In
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
export default Login;
