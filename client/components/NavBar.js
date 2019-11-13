import React from 'react';
import '../index.scss';

import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className='mint-cool-30v-bg' variant='dark'>
        <Navbar.Brand href='#home'>myGNV Resource Directory</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#admin'>Admin</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
