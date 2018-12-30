var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "./Logo";
import { withNamespaces } from '../i18n/i18n';
import { initStore } from "../store/store";
var NavComponent = (function (_super) {
    __extends(NavComponent, _super);
    function NavComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false
        };
        var isServer = typeof window === undefined;
        _this.store = initStore(isServer, undefined);
        return _this;
    }
    NavComponent.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = typeof window === undefined;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer, namespacesRequired: ['Nav'] };
    };
    NavComponent.prototype.toggle = function () {
        console.log("toggle");
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    NavComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement(Navbar, { className: "fixed-top print-d-none" + (this.state.isOpen ? ' open' : ''), color: "light", light: true, expand: "md" },
            React.createElement(NavbarBrand, { href: "/", className: "d-flex align-items-center" },
                React.createElement(Logo, null)),
            React.createElement(NavbarToggler, { className: "border-0", onClick: function () { return _this.toggle(); } }),
            React.createElement(Collapse, { isOpen: this.state.isOpen, navbar: true },
                React.createElement(Nav, { className: "ml-auto align-items-center", navbar: true },
                    React.createElement(NavItem, { className: "print-d-none" },
                        React.createElement(NavLink, { href: "/index", className: "text-center" }, this.props.t('index'))),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "/about", className: "text-center" }, this.props.t('aboutHere'))),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "/redux-game", className: "text-center font-weight-bold" }, this.props.t('reduxGame'))),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "/resume", className: "text-center" }, this.props.t('author'))),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "https://github.com/inkcarve", className: "text-center" }, "Github")),
                    React.createElement(NavItem, null,
                        React.createElement("button", { className: "mx-2 btn btn-outline-primary rounded-0", onClick: function () { return _this.store.changeLanguage(); } }, this.store.toggleLanguageBtnText))))));
    };
    return NavComponent;
}(React.Component));
export default withNamespaces('Nav')(NavComponent);
//# sourceMappingURL=Nav.js.map