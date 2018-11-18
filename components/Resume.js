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
import { Provider } from "mobx-react";
import "./Resume.scss";
import { ListGroup, ListGroupItem } from "reactstrap";
import { initStore } from "../store/store";
import { dangeriousHtmlMarkup } from "../common/html-service";
import PrintTopNav from "../components/PrintTopNav";
var printSvg = require("../static/image/_ionicons_svg_md-print.svg");
var Resume = (function (_super) {
    __extends(Resume, _super);
    function Resume(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(props.isServer, props.lastUpdate);
        _this.authorData = _this.store.authorData;
        return _this;
    }
    Resume.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer };
    };
    Resume.prototype.mapListGroupItem = function (lists) {
        return lists.map(function (obj, i) {
            return (React.createElement(ListGroupItem, { key: i },
                React.createElement("h5", { className: "font-weight-normal title" },
                    React.createElement("div", null,
                        obj.title,
                        React.createElement("small", { className: "pl-1" },
                            obj.titleEn,
                            " :")),
                    React.createElement("div", { className: "small" },
                        React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(obj.content) })))));
        });
    };
    Resume.prototype.mapDetailListItems = function (lists) {
        var _this = this;
        return lists.map(function (obj, i) {
            return (React.createElement("div", { key: i },
                React.createElement("h5", { className: "font-weight-normal title" },
                    obj.title ||
                        (obj.titleEn && (React.createElement("h5", null,
                            obj.title,
                            React.createElement("small", { className: "pl-1" },
                                obj.titleEn,
                                " :")))),
                    React.createElement("div", { className: "small detail" },
                        React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(obj.detail) }))),
                React.createElement("div", { className: "detail-list" },
                    React.createElement("h5", null, obj.listGroupTitle),
                    obj.listGroup && (React.createElement(ListGroup, { className: "mb-4" }, _this.mapListGroupItem(obj.listGroup))))));
        });
    };
    Resume.prototype.print = function (e) {
        if (document.execCommand) {
            document.execCommand('print');
        }
        else {
            window.print();
        }
    };
    Resume.prototype.render = function () {
        var _this = this;
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", { className: "resume pt-4 print-pt-0" },
                React.createElement("button", { className: "btn btn-outline-primary btn-print", onClick: function (e) { return _this.print(e); } },
                    React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(printSvg) })),
                React.createElement("section", { className: "header" },
                    React.createElement(PrintTopNav, null),
                    React.createElement("div", { className: "container-fluid" },
                        React.createElement("div", { className: "row", id: "resume1" },
                            React.createElement("div", { className: "col-12 mb-4 text-right" },
                                React.createElement("h2", { className: "d-inline-block" }, "\u95DC\u65BC\u6211"),
                                React.createElement("h6", { className: "text-muted font-weight-light" }, "\u4E00\u500B\u60F3\u8DE8\u8DB3React-Native\u7684\u7DB2\u9801\u524D\u7AEF\u5DE5\u7A0B\u5E2B")),
                            React.createElement("div", { className: "col-12" },
                                React.createElement("div", { className: "row align-items-md-center" },
                                    React.createElement("div", { className: "col-12 col-md-4 col-lg-3 col-xl-2 image-box mb-5" },
                                        React.createElement("img", { src: "static/image/me.jpg", className: "img-fluid img-me img-thumbnail rounded-circle" })),
                                    React.createElement("div", { className: "pl-md-4 col-12 col-md-8 col-lg-9 col-xl-10 detail-list" },
                                        React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u57FA\u672C\u8CC7\u6599 / PERSONAL DATA"),
                                        React.createElement("div", { className: "row" },
                                            React.createElement("div", { className: "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" }, this.mapDetailListItems(this.authorData.basic)),
                                            React.createElement("div", { className: "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" }, this.mapDetailListItems(this.authorData.contact))))),
                                React.createElement("hr", { className: "my-4 mx-0" }))),
                        React.createElement("div", { className: "row page-break-box" },
                            React.createElement("div", { className: "col-12 col-lg-6" },
                                React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u81EA\u8FF0 / ABOUT ME"),
                                    this.mapDetailListItems(this.authorData.info),
                                    React.createElement("hr", { className: "my-4 mx-0" })),
                                React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u5B78\u6B77 / EDUCATION"),
                                    this.mapDetailListItems(this.authorData.education),
                                    React.createElement("hr", { className: "my-4 mx-0" })),
                                React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u516C\u958B\u4F5C\u54C1\u6216\u5C08\u6848 / \uFF37ORKS OR PROJECTS"),
                                    this.mapDetailListItems(this.authorData.projects),
                                    React.createElement("hr", { className: "my-4 mx-0" })),
                                React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u5DE5\u4F5C\u7D93\u9A57 / WORK EXPERIENCE"),
                                    this.mapDetailListItems(this.authorData.jobs))),
                            React.createElement(PrintTopNav, null),
                            React.createElement("div", { className: "col-12 col-lg-6" },
                                React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u524D\u7AEF\u76F8\u95DC\u6280\u80FD / FRONTEND SKILL"),
                                    this.mapDetailListItems(this.authorData.skill),
                                    React.createElement("hr", { className: "my-4 mx-0" })),
                                React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u975E\u524D\u7AEF\u76F8\u95DC\u6280\u80FD / OTHER SKILL"),
                                    this.mapDetailListItems(this.authorData.otherSkill),
                                    React.createElement("hr", { className: "my-4 mx-0" })))))))));
    };
    return Resume;
}(React.Component));
export default Resume;
//# sourceMappingURL=Resume.js.map