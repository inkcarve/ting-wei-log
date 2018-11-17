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
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
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
        var _this = this;
        return (React.createElement(Navbar, { className: "fixed-top", color: "faded", light: true, expand: "md" },
            React.createElement(NavbarBrand, { href: "/", className: "d-flex align-items-center" },
                React.createElement("span", { className: "small text-warning", style: { fontSize: '40px', paddingRight: 3 } }, "Road"),
                " ",
                React.createElement("div", null,
                    React.createElement("div", { style: { fontSize: '12px' } },
                        " ",
                        React.createElement("div", { className: "text-muted" }, "of"),
                        React.createElement("div", { className: "text-primary" }, "Ting Wei")))),
            React.createElement(NavbarToggler, { className: "border-0", onClick: function () { return _this.toggle(); } }),
            React.createElement(Collapse, { isOpen: this.state.isOpen, navbar: true },
                React.createElement(Nav, { className: "ml-auto", navbar: true },
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "/about", className: "text-center" }, "Index")),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "/about", className: "text-center" }, "About Here")),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "/resume", className: "text-center" }, "Author")),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { href: "https://github.com/inkcarve", className: "text-center" }, "Github"))))));
    };
    return default_1;
}(React.Component));
export default default_1;
//# sourceMappingURL=Nav.js.map