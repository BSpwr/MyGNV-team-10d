import React from 'reactn';
import { Button, Form, Modal, Alert, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class SubCategoryFormElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  handleSubCategoryOfUpdate = (subCategoryOf) => {
    this.props.handleSubCategoryOfUpdate(subCategoryOf);
  };

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

  render() {
    const reasonableParentCategories = this.state.categories.filter(
      (category) => {
        return (
          category._id !== this.props.id &&
          category.subcategory_of.filter(
            ((categoryInner) => {
              return categoryInner._id == this.props.id;
            }).length == 0,
          )
        );
      },
    );
    return null;
  }
}

export default SubCategoryFormElement;
