import * as React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";
import Logo from "./Logo";
export default class extends React.Component<any, any> {
  // constructor(props:any) {
  //   super(props);
  //   // this.props.isOpen=false;
  //   // this.toggle = this.toggle.bind(this);
  //   // this.state.isOpen=false;
  //   this.state = {
  //     isOpen: this.props.nav,
  //     // nav: this.props.nav,
  //     // inNavbar: this.props.inNavbar
  //     // isOpen: this.props.isOpen
  //   };
  // }

  state = {
    isOpen: false
    // nav: this.props.nav,
    // inNavbar: this.props.inNavbar
    // isOpen: this.props.isOpen
  };

  toggle() {
    console.log("toggle");
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className={`fixed-top print-d-none${this.state.isOpen ? ' open':''}`} color="light" light expand="md">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <Logo />
        </NavbarBrand>
        <NavbarToggler className="border-0" onClick={() => this.toggle()} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="print-d-none">
              <NavLink href="/index" className="text-center">
                Index
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="text-center">
                About Here
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume" className="text-center">
                Author
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/inkcarve"
                className="text-center"
              >
                Github
              </NavLink>
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
    );
  }
}
