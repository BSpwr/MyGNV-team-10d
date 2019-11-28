import React from 'reactn';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import axios from 'axios';

class AuthButton extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    axios
      .post('/api/user/logout')
      .then((res) => {
        this.setGlobal({ isAuthenticated: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return this.global.isAuthenticated ? (
      <p>
        Welcome!
        <Button
          onClick={async () => {
            this.logout();
            this.props.history.push('/');
          }}
        >
          Sign out
        </Button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }
}

AuthButton.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(AuthButton);
