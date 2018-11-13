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
import { Provider } from 'mobx-react';
import './Resume.scss';
var Resume = (function (_super) {
    __extends(Resume, _super);
    function Resume(props) {
        return _super.call(this, props) || this;
    }
    Resume.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", { className: "resume" },
                React.createElement("section", { className: "header" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-12" },
                                React.createElement("h2", { className: "d-inline-block page-title" }, "\u95DC\u65BC\u6211")),
                            React.createElement("div", { className: "col-12 d-flex" },
                                React.createElement("div", { className: "image-box" },
                                    React.createElement("img", { src: "static/image/me.jpg", className: "img-fluid img-me img-thumbnail rounded-circle" })),
                                React.createElement("div", { className: "d-flex flex-column justify-content-center pl-4 detail-list" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title" }, "\u57FA\u672C\u8CC7\u6599"),
                                    React.createElement("h5", { className: "font-weight-normal title" },
                                        React.createElement("div", { className: "small" }, "Name:"),
                                        React.createElement("div", null, " \u6797\u5EAD\u744B / Ting Wei Lin")),
                                    React.createElement("h5", { className: "font-weight-normal title" },
                                        React.createElement("div", { className: "small" }, "Birthday:"),
                                        " ",
                                        React.createElement("small", null, "1985. "),
                                        "  03.04"),
                                    React.createElement("h5", { className: "font-weight-normal title" },
                                        React.createElement("div", { className: "small" }, "Job Title:"),
                                        " \u7DB2\u9801\u524D\u7AEF\u5DE5\u7A0B\u5E2B / Web frontend Developer"))),
                            React.createElement("div", { className: "col-12" },
                                React.createElement("hr", { className: "my-4 mx-2" })),
                            React.createElement("div", { className: "d-flex flex-column justify-content-center pl-4 detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title" }, "\u524D\u7AEF\u76F8\u95DC\u6280\u80FD / skill"),
                                React.createElement("h5", { className: "font-weight-normal title" },
                                    React.createElement("div", { className: "small" }, "Basic:"),
                                    React.createElement("div", null, " HTML\u3001CSS\u3001Javascript")),
                                React.createElement("h5", { className: "font-weight-normal title" },
                                    React.createElement("div", { className: "small" }, "Style:"),
                                    "Bootstrap(3\u30014)\u3001Scss"),
                                React.createElement("h5", { className: "font-weight-normal title" },
                                    React.createElement("div", { className: "small" }, "Frontend web framework:"),
                                    "React\u3001ReactNative\u3001Angular7\u3001Vue(Cli 3)\u3001AngularJs"),
                                React.createElement("h5", { className: "font-weight-normal title" },
                                    React.createElement("div", { className: "small" }, "App framework:"),
                                    "ReactNative"),
                                React.createElement("h5", { className: "font-weight-normal title" },
                                    React.createElement("div", { className: "small" }, "Other:"),
                                    "Webpack\u3001Jquery\u3001NodeJs+Express"))))))));
    };
    return Resume;
}(React.Component));
export default Resume;
//# sourceMappingURL=Resume.js.map