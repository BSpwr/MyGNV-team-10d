import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import IndivProvider from './IndivProvider'
import { Link } from 'react-router-dom';
class DisplayProviders extends React.Component {
  render() {
    const selectedProvider = this.props.selectedProvider
      ? this.props.selectedProvider
      : '';
    const filterText = this.props.filterText ? this.props.filterText : '';
    const providers = this.props.providers ? this.props.providers : {};
    const providerList = Object.values(providers)
      .filter((provider) => {
        return (
          provider['Provider Name']
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) >= 0
        );
      })
      .map((provider) => {
        let selectedStyle;
        if (provider._id === selectedProvider) {
          selectedStyle = { backgroundColor: 'orange' };
        }
        
        return (
        <>
          <tr
            key={provider._id}
            style={selectedStyle}
            onClick={() => {
              this.props.updateSelected(provider._id);
            }}
          >
            <td>{provider['Provider Name']} </td>
          </tr>
          <div>{providers.map((provider, id) => (
              <Link to={'/provider/${id}'}>{provider}</Link>
            ))
          }
          </div>
          

        </>
        );
      });
      console.log(providers)
    
    return (
      <React.Fragment>
          <tbody>
            {providerList}
          </tbody>
      </React.Fragment>

    );
  }
}

DisplayProviders.propTypes = {
  selectedProvider: PropTypes.string.isRequired,
  updateSelected: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  providers: PropTypes.instanceOf(Object).isRequired,
};

export default DisplayProviders;
