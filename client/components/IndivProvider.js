import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

class IndivProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider: null,
    };
  }
componentDidMount() {
  axios
    .get(`/api/provider/${this.props.id}`)
    .then((res) => {
      this.setState({ provider: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

render() {
  console.log("Reached IndivProvider");
  console.log(this.props.id);

  console.log(this.state.provider)
  var currProv = this.state.provider
  
  return (
    <>
      <div>
        <h1>{currProv.name}</h1>
        <p>{currProv.services_provided!==""? currProv.services_provided:""}</p>
        <p>{currProv.translation_available!==""? currProv.translation_available:"Translation is not available"}</p>
        <p>{currProv.eligibility_criteria!==""?currProv.eligibility_criteria:""}</p>
        <p>{currProv.service_area!==""?currProv.serve_area:""}</p>
        <p>{}</p>
      </div>
    </>
  );
};
}
IndivProvider.PropTypes = {
  id: PropTypes.instanceOf(String).isRequired,
};

export default IndivProvider;
