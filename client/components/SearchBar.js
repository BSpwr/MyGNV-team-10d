import React from 'react';
import PropTypes from 'prop-types';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

class SearchBar extends React.Component {
  filterUpdate = (value) => {
    if (value !== undefined) {
      console.log(value);
      this.props.updateFilterText(value);
    }
  };

  render() {
    const providers = this.props.providers ? this.props.providers : {};
    const isLoading = Object.keys(providers).length === 0 ? true : false;
    const providerList = Object.values(providers).map(
      (provider) => provider['Provider Name'],
    );
    return (
      <React.Fragment>
        <Typeahead
          id='searchBox'
          labelKey='name'
          options={providerList}
          placeholder={isLoading ? 'Loading...' : 'Search for a provider'}
          ref={this.filterRef}
          onInputChange={this.filterUpdate}
          onChange={(e) => this.filterUpdate(e[0])}
        />
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  updateFilterText: PropTypes.func,
  providers: PropTypes.instanceOf(Object),
};

export default SearchBar;
