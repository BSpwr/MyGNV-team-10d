import React from 'reactn';
import { Button, Form, Modal, Alert, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class SubCategoryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        name: '',
        subcategory_of: [],
        icon_name: '',
        is_lowest_level: false,
      },
      hadError: false,
      modalIsDisplayed: false,
    };
  }

  componentDidMount() {
    const id = this.props.id;
    if (id !== undefined && id !== null && id !== '') {
      axios
        .get(`/api/category/${id}`)
        .then((res) => {
          this.setState({ category: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleNameChange = (event) => {
    this.setState({
      category: Object.assign({}, this.state.category, {
        name: event.target.value,
      }),
    });
  };

  handleIconNameChange = (event) => {
    this.setState({
      category: Object.assign({}, this.state.category, {
        icon_name: event.target.value,
      }),
    });
  };

  handleIsLowestLevelChange = (event) => {
    console.log(event.target.value);
    this.setState({
      category: Object.assign({}, this.state.category, {
        is_lowest_level: event.target.value,
      }),
    });
  };

  handleSubcategoryOfChange = (event) => {
    console.log(event.target.value);
    this.setState({
      category: Object.assign({}, this.state.category, {
        subcategory_of: event.target.value,
      }),
    });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  openModal = () => {
    this.setState({
      modalIsDisplayed: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsDisplayed: false,
      hadError: false,
    });
  };

  submit = (event) => {
    event.preventDefault();
    axios
      .post('/api/user/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.setGlobal({
          isAuthenticated: res.data.success,
          userEmail: res.data.email,
        });
        if (res.data.success) {
          this.closeModal();
        } else this.setState({ hadError: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Button variant='primary' onClick={this.openModal}>
          {this.props.buttonName}
        </Button>
        <Modal show={this.state.modalIsDisplayed} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.buttonName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.hadError ? (
              <Alert
                variant='danger'
                style={{
                  marginTop: '1em',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                An error has occurred. Please try again.
              </Alert>
            ) : null}
            <Form>
              <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.state.category.name}
                  onChange={this.handleNameChange}
                  placeholder='Name'
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group controlId='formIconName'>
                    <Form.Label>Icon Name</Form.Label>
                    <Form.Control
                      value={this.state.category.icon_name}
                      onChange={this.handleIconNameChange}
                      placeholder='Fontawesome Icon Name'
                    />
                  </Form.Group>
                </Col>
                <Col sm='auto'>
                  <Form.Label>Icon Preview</Form.Label>
                  <i
                    className={`fal fa-${
                      this.state.category.icon_name
                    } fa-${3}x`}
                    style={{
                      margin: 'auto',
                      display: 'block',
                    }}
                  ></i>
                </Col>
              </Row>

              <Form.Group controlId='formLowestLevelCategoryCheckbox'>
                <Form.Switch
                  checked={this.state.category.is_lowest_level}
                  onChange={this.handleIsLowestLevelChange}
                  type='checkbox'
                  label='Lowest Level Category'
                />
              </Form.Group>
              <Form.Label>
                Subcategory Of: (Multi-selection possible)
              </Form.Label>
              <Form.Control
                // value={this.state.category.subcategory_of}
                onChange={this.handleSubcategoryOfChange}
                as='select'
                multiple
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.closeModal}>
              Close
            </Button>
            <Button onClick={this.submit} variant='primary' type='submit'>
              Submit Edits
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

SubCategoryEdit.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default SubCategoryEdit;
