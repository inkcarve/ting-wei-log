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
import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            isOpen: _this.props.nav,
        };
        return _this;
    }
    default_1.prototype.toggle = function () {
        console.log('toggle');
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    default_1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Navbar, { className: "fixed-top", color: "faded", light: true, expand: "md" },
                React.createElement(NavbarBrand, { href: "/" }, "Next-Test"),
                React.createElement(NavbarToggler, { onClick: this.toggle }),
                React.createElement(Collapse, { isOpen: this.state.isOpen, navbar: true },
                    React.createElement(Nav, { className: "ml-auto", navbar: true },
                        React.createElement(NavItem, null,
                            React.createElement(NavLink, { href: "/about" }, "About")),
                        React.createElement(NavItem, null,
                            React.createElement(NavLink, { href: "https://github.com/inkcarve" }, "Github")))))));
    };
    return default_1;
}(React.Component));
export default default_1;
//# sourceMappingURL=Nav.js.map