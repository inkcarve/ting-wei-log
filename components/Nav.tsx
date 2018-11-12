import * as React from 'react';
import Link from 'next/link';
// import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap-4';
// import {Nav} from 'react-bootstrap-4';
// import {Nav} from 'react-bootstrap-4';
// const core_scss = require( '../scss/core.scss');
// export default () => (
//   <div>
//   	<Navbar>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">React-Bootstrap</a>
//       </Navbar.Brand>
//     </Navbar.Header>
//     <Nav>
//       <NavItem eventKey={1} href="#">Link</NavItem>
//       <NavItem eventKey={2} href="#">Link</NavItem>
//       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//         <MenuItem eventKey={3.1}>Action</MenuItem>
//         <MenuItem eventKey={3.2}>Another action</MenuItem>
//         <MenuItem eventKey={3.3}>Something else here</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey={3.4}>Separated link</MenuItem>
//       </NavDropdown>
//     </Nav>
//   </Navbar>
//   </div>
// )

// import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class extends React.Component<any, any>{
  constructor(props:any) {
    super(props);
    // this.props.isOpen=false;
    this.toggle = this.toggle.bind(this);
    // this.state.isOpen=false;
    this.state = {
      isOpen: this.props.nav,
      // nav: this.props.nav,
      // inNavbar: this.props.inNavbar
      // isOpen: this.props.isOpen
    };
  }
  toggle() {
    console.log('toggle');
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  public render() {
    return (
      <div>
        <Navbar className="fixed-top" color="faded" light expand="md">
          <NavbarBrand href="/">Next-Test</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {<NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>}
              <NavItem>
                <NavLink href="https://github.com/inkcarve">Github</NavLink>
              </NavItem>
              {/*<UncontrolledDropdown >
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>*/}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}