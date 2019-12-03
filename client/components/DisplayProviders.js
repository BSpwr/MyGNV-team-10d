import React from 'reactn';
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
    const providerList = providers
      .filter((provider) => {
        return (
          provider.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
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
            <td>{provider.name} </td>
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
  providers: PropTypes.instanceOf(Array).isRequired,
};

export default DisplayProviders;
