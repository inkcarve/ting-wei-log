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
import Logo from "./Logo";
var PrintTopNav = (function (_super) {
    __extends(PrintTopNav, _super);
    function PrintTopNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrintTopNav.prototype.render = function () {
        return (React.createElement("div", { className: "d-none col-12 print-d-block page-break-before my-5" },
            React.createElement("div", { className: "border-bottom" },
                React.createElement(Logo, null))));
    };
    return PrintTopNav;
}(React.Component));
export default PrintTopNav;
//# sourceMappingURL=PrintTopNav.js.map