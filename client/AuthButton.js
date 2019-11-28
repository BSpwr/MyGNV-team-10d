import React from 'reactn';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Auth from './api/Auth';

class AuthButton extends React.Component {
    class
}

const AuthButton = withRouter(async ({ history }) =>
  (await Auth.isLoggedIn()) ? (
    <p>
      Welcome!{' '}
      <Button
        onClick={async () => {
          await Auth.logout(() => history.push('/'));
        }}
      >
        Sign out
      </Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  ),
);

export default AuthButton;
