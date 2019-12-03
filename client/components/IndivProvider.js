import React from 'reactn';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Card } from 'react-bootstrap';

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
  }

  render() {
    console.log('Reached IndivProvider');
    console.log(this.props.id);

    console.log(this.state.provider);
    const currProv = this.state.provider;
    return (
      <>
        {this.state.provider == null ? (
          'Loading!'
        ) : (
          <div>
            <Card>
              <Card.Title>{currProv.name}</Card.Title>
              <Card.Body>
                <Card.Subtitle text-color='grey'>
                  {currProv.services_provided !== '' &&
                  currProv.services_provided !== undefined
                    ? currProv.services_provided
                    : 'Services not provided'}
                </Card.Subtitle>
                <Card.Text>
                  {currProv.eligibility_criteria !== ''
                    ? currProv.eligibility_criteria
                    : ''}
                  {currProv.service_area !== '' ? currProv.serve_area : ''}
                </Card.Text>
                <Card.Text>
                  Location{': '}
                  {currProv.addresses[0].line_1}
                  {currProv.addresses[0].line_2 !== undefined &&
                  currProv.addresses[0].line_2 !== ''
                    ? ', ' + currProv.addresses[0].line_2
                    : ''}
                  {currProv.addresses[0].city !== undefined &&
                  currProv.addresses[0].city !== ''
                    ? ', ' + currProv.addresses[0].city
                    : ''}
                  {currProv.addresses[0].state !== undefined &&
                  currProv.addresses[0].state !== ''
                    ? ', ' + currProv.addresses[0].state
                    : ''}
                  {currProv.addresses[0].zipcode !== undefined &&
                  currProv.addresses[0].zipcode !== ''
                    ? ', ' + currProv.addresses[0].zipcode
                    : ''}
                </Card.Text>
                <Card.Text>
                  Contact Information{': '}
                  {currProv.phone_numbers[0].number}
                  {currProv.phone_numbers[0].contact !== undefined &&
                  currProv.phone_numbers[0].contact !== ''
                    ? ', ' + currProv.phone_numbers[0].contact
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.email[0] !== undefined && currProv.email[0] !== ''
                    ? 'Email: ' + currProv.email[0]
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.bus_routes[0] !== undefined &&
                  currProv.bus_routes[0] !== ''
                    ? 'Bus Route(s): ' + currProv.bus_routes[0]
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.website[0] !== undefined &&
                  currProv.website[0] !== ''
                    ? 'Website: ' + currProv.website[0]
                    : ''}
                </Card.Text>
                <Card.Text>
                  Hours{': '}
                  {currProv.hours.monday !== undefined &&
                  currProv.hours.monday !== ''
                    ? '\nMonday: ' + currProv.hours.monday
                    : ''}
                  {/* <br/> */}
                  {currProv.hours.tuesday !== undefined &&
                  currProv.hours.tuesday !== ''
                    ? '\nTuesday: ' + currProv.hours.tuesday
                    : ''}
                  {/* <br/> */}
                  {currProv.hours.wednesday !== undefined &&
                  currProv.hours.wednesday !== ''
                    ? '\nWednesday: ' + currProv.hours.wednesday
                    : ''}
                  {currProv.hours.thursday !== undefined &&
                  currProv.hours.thursday !== ''
                    ? '\nThursday: ' + currProv.hours.thursday
                    : ''}
                  {currProv.hours.friday !== undefined &&
                  currProv.hours.friday !== ''
                    ? '\nFriday: ' + currProv.hours.friday
                    : ''}
                  {currProv.hours.saturday !== undefined &&
                  currProv.hours.saturday !== ''
                    ? '\nSaturday: ' + currProv.hours.saturday
                    : ''}
                  {currProv.hours.sunday !== undefined &&
                  currProv.hours.sunday !== ''
                    ? '\nSunday: ' + currProv.hours.sunday
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.walk_ins !== undefined && currProv.walk_ins !== ''
                    ? currProv.walk_ins
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.appointment !== undefined
                    ? (currProv.appointment.is_required !== undefined
                      ? currProv.appointment.is_required
                        ? 'Appointment is required.'
                        : 'Appointment is not required.'
                      : '') +
                      '\n' +
                      (currProv.appointment.phone !== undefined
                        ? currProv.appointment.phone !== ''
                          ? 'Call here: ' + currProv.appointment.phone
                          : ''
                        : '') +
                      '\n' +
                      (currProv.appointment.website !== undefined
                        ? currProv.appointment.website !== ''
                          ? 'Click here: ' + currProv.appointment.website
                          : ''
                        : '') +
                      '\n' +
                      (currProv.appointment.email !== undefined
                        ? currProv.appointment.email !== ''
                          ? 'Email here: ' + currProv.appointment.email
                          : ''
                        : '') +
                      '\n' +
                      (currProv.appointment.other_info !== undefined
                        ? currProv.appointment.other_info !== ''
                          ? 'Additional information: ' +
                            currProv.appointment.other_info
                          : ''
                        : '')
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.application !== undefined
                    ? (currProv.application.is_required !== undefined
                      ? currProv.application.is_required
                        ? 'Application is required.'
                        : ''
                      : '') +
                      '\n' +
                      (currProv.application.apply_online !== undefined
                        ? currProv.application.apply_online
                          ? 'You must apply online.'
                          : ''
                        : '') +
                      '\n' +
                      (currProv.application.apply_in_person !== undefined
                        ? currProv.application.apply_in_person
                          ? 'You must apply in person.'
                          : ''
                        : '') +
                      '\n' +
                      (currProv.application.phone !== undefined
                        ? currProv.application.phone !== ''
                          ? 'Call here to apply: ' + currProv.application.phone
                          : ''
                        : '') +
                      '\n' +
                      (currProv.application.website !== undefined
                        ? currProv.application.website !== ''
                          ? 'Apply here: ' + currProv.applcation.website
                          : ''
                        : '') +
                      '\n' +
                      (currProv.application.email !== undefined
                        ? currProv.application.email !== ''
                          ? 'Email here to apply: ' + currProv.application.email
                          : ''
                        : '') +
                      '\n' +
                      (currProv.application.other_info !== undefined
                        ? currProv.application.other_info !== ''
                          ? 'Additional Information: ' +
                            currProv.application.other_info
                          : ''
                        : '')
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.cost_info !== undefined && currProv.cost_info !== ''
                    ? 'Cost Information: ' + currProv.cost_info
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.translation_available !== undefined &&
                  currProv.translation_available !== ''
                    ? currProv.translation_available
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.united_way_approval !== undefined
                    ? currProv.united_way_approval
                      ? ''
                      : ''
                    : ''}
                </Card.Text>
                <Card.Text>
                  {currProv.additional_information !== undefined &&
                  currProv.additional_information !== ''
                    ? 'Additional information: ' +
                      currProv.additional_information
                    : ''}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </>
    );
  }
}

IndivProvider.propTypes = {
  id: PropTypes.instanceOf(String).isRequired,
};

export default IndivProvider;
