import React from 'reactn';
import { Redirect } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
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

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.state.wasSuccess === true) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <h3>Register</h3>
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
          <Button onClick={this.login} variant='primary' type='submit'>
            Log In
          </Button>
        </Form>
      </Container>
    );
  }
}

Register.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
