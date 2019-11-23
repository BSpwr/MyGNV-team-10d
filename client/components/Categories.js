import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

class Categories extends React.Component {
  render() {
    const iconSize = 3;

    const containerStyle = {
      maxWidth: '30em',
      margin: 'auto auto',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const rowStyle = {
      margin: 'auto',
      justifyContent: 'center',
    };

    const colStyle = { padding: '0 0' };

    const categoryRowList = [];
    let categoryCol = <React.Fragment></React.Fragment>;
    this.props.categoryList.forEach((category, i) => {
      if (i % 3 == 0 && i != 0) {
        categoryRowList.push(categoryCol);
        categoryCol = <React.Fragment></React.Fragment>;
      }
      categoryCol = (
        <React.Fragment>
          {categoryCol}
          <Col style={colStyle}>
            <CategoryCard
              iconName={category.iconName}
              iconSize={iconSize}
              categoryName={category.categoryName}
              path={category.path}
            />
          </Col>
        </React.Fragment>
      );
      if (i == this.props.categoryList.length - 1) {
        categoryRowList.push(categoryCol);
      }
    });
    let categoryGrid = <React.Fragment></React.Fragment>;
    categoryRowList.forEach((row, i) => {
      categoryGrid = (
        <React.Fragment>
          {categoryGrid}
          <Row style={rowStyle}>{row}</Row>
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <Container style={containerStyle}>{categoryGrid}</Container>
      </React.Fragment>
    );
  }
}

Categories.propTypes = {
  categoryList: PropTypes.instanceOf(Array).isRequired,
};

export default Categories;
