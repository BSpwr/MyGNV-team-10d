import React from 'reactn';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Auth from './api/Auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
  }

  login = async () => {
    const isLoggedIn = await Auth.login(
      (this.state.email, this.state.password),
    );
    if (isLoggedIn) {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <Button onClick={this.login}>Log in</Button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
