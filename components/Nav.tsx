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
import { i18n, withNamespaces } from '../i18n/i18n';
import { initStore } from "../store/store";
import { computed } from "mobx";


class NavComponent extends React.Component<any, any> {
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
  // // }
  private store:any;
  static getInitialProps({ req }: { req: any }) {
    const isServer = typeof window===undefined;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer , namespacesRequired: ['Nav'] };
  }

  constructor(props:any) {
    super(props);
    const isServer = typeof window===undefined;
    this.store = initStore(isServer ,undefined)
  }

  // @observable store = initStore(this.props.isServer, this.props.lastUpdate);
  // static async getInitialProps({ req }: { req: any }) {
  //   const isServer = !!req;
  //   return { namespacesRequired: ['Nav'] }
  // }

  // @computed get toggleLanguageBtn(){
  //   return this.
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
    // console.log(this.props.t)
    // console.log(i18n.language)
    return (
      <Navbar className={`fixed-top print-d-none${this.state.isOpen ? ' open':''}`} color="light" light expand="md">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <Logo />
        </NavbarBrand>
        <NavbarToggler className="border-0" onClick={() => this.toggle()} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto align-items-center" navbar>
            <NavItem className="print-d-none">
              <NavLink href="/index" className="text-center">
                {this.props.t('index')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="text-center">
              {this.props.t('aboutHere')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/redux-game" className="text-center font-weight-bold">
              {this.props.t('reduxGame')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume" className="text-center">
              {this.props.t('author')}
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
            <NavItem>
              <button className="mx-2 btn btn-outline-primary rounded-0" onClick={() => this.store.changeLanguage()}>{this.store.toggleLanguageBtnText}</button>
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

export default withNamespaces('Nav')(NavComponent)

// export default NavComponent
