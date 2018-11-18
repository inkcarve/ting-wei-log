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
var Logo = (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logo.prototype.render = function () {
        return (React.createElement("div", { className: "d-flex align-items-center" },
            React.createElement("span", { className: "small text-warning", style: { fontSize: "40px", paddingRight: 3 } }, "Road"),
            React.createElement("div", null,
                React.createElement("div", { style: { fontSize: "12px" } },
                    React.createElement("div", { className: "text-muted" }, "of"),
                    React.createElement("div", { className: "text-primary" }, "Ting Wei")))));
    };
    return Logo;
}(React.Component));
export default Logo;
//# sourceMappingURL=Logo.js.map