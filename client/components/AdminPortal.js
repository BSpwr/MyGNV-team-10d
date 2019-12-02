import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class AdminPortal extends React.Component {
  render() {
    return (
      <div>
        <h>
          <center>
            <b>Admin Portal</b>
          </center>
        </h>
        <SearchBar
          providers={this.props.providers}
          updateFilterText={(junk) => {
            return;
          }}
        />
      </div>
    );
  }
}
export default AdminPortal;
