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
import { Head } from 'next/document';
var HeadCustom = (function (_super) {
    __extends(HeadCustom, _super);
    function HeadCustom(props) {
        return _super.call(this, props) || this;
    }
    HeadCustom.prototype.render = function () {
        console.log("headcustom");
        return (React.createElement(Head, null,
            React.createElement("title", null,
                "Next - ",
                this.props.title),
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            React.createElement("link", { href: "static/bootstrap/css/bootstrap.min.css", rel: "stylesheet" }),
            React.createElement("link", { rel: "stylesheet", href: "/_next/static/style.css" })));
    };
    return HeadCustom;
}(React.Component));
export default HeadCustom;
//# sourceMappingURL=Head.js.map