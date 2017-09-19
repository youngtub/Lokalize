import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Nav, NavItem, NavLink }

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
        <Navbar toggleable>
          <NavbarToggler onClick={this.navClick} />
          <NavbarBrand href="/home">Localize</NavbarBrand>
          <Collapse isActive={this.state.isActive}>
            <Nav className="m1-auto">
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/host">Host Event</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
};

export default Header;