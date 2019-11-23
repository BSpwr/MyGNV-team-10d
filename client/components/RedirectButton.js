import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

class RedirectButton extends React.Component {
  doRedirect = () => {
    this.props.history.push(this.props.path);
  };

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={this.doRedirect}
          className={this.props.className}
          variant={this.props.variant}
        >
          {this.props.children}
        </Button>
      </React.Fragment>
    );
  }
}

RedirectButton.propTypes = {
  path: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  variant: PropTypes.string,
};

RedirectButton.defaultProps = {
  className: '',
  variant: 'outline-primary',
};

export default withRouter(RedirectButton);
