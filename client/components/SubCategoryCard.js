import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

class SubCategoryCard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { className: 'cat-card-border' };
  }

  render() {
    return (
      <Nav defaultActiveKey='/home' className='flex-column'>
        <Nav.Link href={this.props.path}>{this.props.categoryName}</Nav.Link>
      </Nav>
    );
  }
}

SubCategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SubCategoryCard);
