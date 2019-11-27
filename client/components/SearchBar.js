import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';
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
    const isLoading = providers.length === 0 ? true : false;
    const providerList = providers.map((provider) => provider.name);
    return (
      <React.Fragment>
        <Container>
          <Typeahead
            id='searchBox'
            labelKey='name'
            options={providerList}
            placeholder={isLoading ? 'Loading...' : 'Search for a provider'}
            ref={this.filterRef}
            onInputChange={this.filterUpdate}
            onChange={(e) => this.filterUpdate(e[0])}
          />
        </Container>
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  updateFilterText: PropTypes.func.isRequired,
  providers: PropTypes.instanceOf(Array).isRequired,
};

export default SearchBar;
