import React from 'reactn';
import { Redirect } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      email: '',
      password: '',
      wasSuccess: false,
      invalidAttempt: false,
      modalIsDisplayed: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  login = (event) => {
    event.preventDefault();
    axios
      .post('/api/user/register', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        if (res.data.success) this.setState({ wasSuccess: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openModal = () => {
    this.setState({
      modalIsDisplayed: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsDisplayed: false,
      invalidAttempt: false,
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.wasSuccess === true) {
      return <Redirect to={from} />;
    }
    return (
      <React.Fragment>
        <Button variant='primary' onClick={this.openModal}>
            Register
        </Button>
        <Modal show={this.state.modalIsDisplayed} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  type='email'
                  placeholder='Enter email'
                />
                <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
                </Form.Text>
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
            <Button variant='secondary' onClick={this.closeModal}>
              Close
            </Button>
            <Button onClick={this.login} variant='primary' type='submit'>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}


Register.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
