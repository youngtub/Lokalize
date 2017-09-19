import React from 'react';
import { Navbar, Nav, NavItem, PageHeader } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    }
    this.toggle = this.navClick.bind(this);
  }

  navClick() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div className="nav-bar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Localize</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/home">Home</NavItem>
              <NavItem eventKey={2} href="/host">Host Event</NavItem>
              
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/logout">Log Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <PageHeader> LOCALIZE <small>Random Meetup Generator</small></PageHeader>
      </div>
    )
  }
};

export default Header;