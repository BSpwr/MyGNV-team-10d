import React from 'reactn';
import PropTypes from 'prop-types';

import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const providerList = this.state.providers.map((provider) => {
    return <ListGroup.Item
      key={provider._id}
      action href="/">
        <div style={{whiteSpace: "pre-wrap"}}>
          <h5>
          {provider.name}
          </h5>
          <p>
            {provider.services_provided}
            {"\n"}
            {"\n"}
            {provider.address}
          </p>
        </div>

        </ListGroup.Item>;
      
    });
    return <React.Fragment>{providerList}</React.Fragment>;
  }
}

ProviderList.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default ProviderList;
