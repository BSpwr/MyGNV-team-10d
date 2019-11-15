import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const IndivProvider = (props) => {
  // const data;
  const { providers } = props;
  return (
    <>
      <h1> is this working </h1>
      <h3>Individual Provider Page</h3>
      {Object.values(providers).map((provider) => (
        <h5 key={provider._id}>
          <Link to={`/provider/${provider._id}`}>
            {provider['Provider Name']}
          </Link>
        </h5>
      ))}
    </>
  );
};

IndivProvider.PropTypes = {
  providers: PropTypes.instanceOf(Object).isRequired,
};

export default IndivProvider;
