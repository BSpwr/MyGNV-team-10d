import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RedirectButton from './RedirectButton';
import paths from '../RouterPaths';

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container
          style={{
            margins: 'auto auto',
            maxWidth: '60em',
          }}
        >
          <Row className='justify-content-md-center' style={{ margin: 'auto' }}>
            <Col
              md='auto'
              style={{ textAlign: 'center', paddingBottom: '1em' }}
            >
              <RedirectButton path={paths.topLevelCategoriesPath}>
                Find a resource now.
              </RedirectButton>
            </Col>
            <Col md='auto' style={{ textAlign: 'center' }}>
              <RedirectButton path='/'>What can I qualify for?</RedirectButton>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default MainPage;
