import React from 'reactn';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from './api/Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={async (props) =>
      (await Auth.isAuthenticated()) === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.instanceOf(React.Component).isRequired,
  location: PropTypes.string.isRequired,
};

export default withRouter(ProtectedRoute);
