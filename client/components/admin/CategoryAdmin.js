import React from 'reactn';
import { ListGroup, Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

import CategoryEdit from './CategoryEdit';
import SubCategoryEdit from './SubCategoryEdit';

class CategoryAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], filterText: '' };
  }

  componentDidMount() {
    axios
      .get('/api/category')
      .then((res) => {
        this.setState({
          categories: Object.values(res.data),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleFilterChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const topLevelCategories = this.state.categories
      .filter((category) => {
        return (
          category.subcategory_of.length == 0 &&
          category.name
            .toLowerCase()
            .includes(this.state.filterText.toLowerCase())
        );
      })
      .map((category) => {
        return (
          <ListGroup.Item key={category._id}>
            <CategoryEdit buttonName='Edit' id={category._id}></CategoryEdit>
            <h5
              style={{
                color: 'black',
                fontWeight: 'bold',
                display: 'inline',
                paddingLeft: '2em',
              }}
            >
              {category.name}
            </h5>
          </ListGroup.Item>
        );
      });

    const subCategories = this.state.categories
      .filter((category) => {
        return (
          category.subcategory_of.length > 0 &&
          category.name
            .toLowerCase()
            .includes(this.state.filterText.toLowerCase())
        );
      })
      .map((category) => {
        return (
          <ListGroup.Item key={category._id}>
            <CategoryEdit buttonName='Edit' id={category._id}></CategoryEdit>
            <h5
              style={{
                color: 'black',
                fontWeight: 'bold',
                display: 'inline',
                paddingLeft: '2em',
              }}
            >
              {category.name}
            </h5>
          </ListGroup.Item>
        );
      });

    return (
      <Container>
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Col>
            <Form style={{ width: '100%' }}>
              <Form.Group controlId='formFilterText'>
                <Form.Label>
                  <strong>Filter categories</strong>
                </Form.Label>
                <Form.Control
                  value={this.state.filterText}
                  onChange={this.handleFilterChange}
                  placeholder='Filter categories'
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm='auto'>
            <Row style={{ marginBottom: '0.5em' }}>
              <CategoryEdit
                buttonName='Add Category'
                style={{ margins: 'auto auto' }}
              />
            </Row>
            <Row>
              <SubCategoryEdit
                buttonName='Add SubCategory'
                style={{ margins: 'auto auto' }}
              />
            </Row>
          </Col>
        </Row>
        <Row>
          <ListGroup
            style={{
              display: 'inline-block',
              margin: '0 auto',
              alignSelf: 'flex-start',
            }}
          >
            <strong>Top Level Categories</strong>
            {topLevelCategories}
          </ListGroup>
          <ListGroup
            style={{
              display: 'inline-block',
              margin: '0 auto',
              alignSelf: 'flex-start',
            }}
          >
            <strong>SubCategories</strong>
            {subCategories}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default CategoryAdmin;

// list all top level categories
