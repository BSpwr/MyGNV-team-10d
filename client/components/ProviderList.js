import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

class ProviderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { providers: [] };
  }
  componentDidMount() {
    axios
      .get(`/api/provider/subCategory/${this.props.category._id}`)
      .then((res) => {
        this.setState({ providers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const providerList = this.state.providers.map((provider) => {
      return <p key={provider._id}>{provider.name}</p>;
    });
    return <React.Fragment>{providerList}</React.Fragment>;
  }
}

ProviderList.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default ProviderList;
