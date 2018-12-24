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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from "mobx-react";
import "./Resume.scss";
import { ListGroup, ListGroupItem } from "reactstrap";
import { dangeriousHtmlMarkup } from "../common/html-service";
import PrintTopNav from "../components/PrintTopNav";
import { withNamespaces } from "../i18n/i18n";
var printSvg = require("../static/image/_ionicons_svg_md-print.svg");
var downloadSvg = require("../static/image/_ionicons_svg_md-download.svg");
var Resume = (function (_super) {
    __extends(Resume, _super);
    function Resume(props) {
        var _this = _super.call(this, props) || this;
        _this.mapListGroupItem = function (lists) {
            return lists.map(function (obj, i) {
                return (React.createElement(ListGroupItem, { key: i },
                    React.createElement("h5", { className: "font-weight-normal title mb-2" },
                        React.createElement("div", null,
                            React.createElement("h5", { className: "mb-1" },
                                obj.title,
                                React.createElement("small", { className: "pl-2 text-warning" },
                                    obj.titleEn,
                                    " "))),
                        React.createElement("div", { className: "small" },
                            React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(obj.content) })))));
            });
        };
        _this.mapDetailListItems = function (lists) {
            return lists.map(function (obj, i) {
                return (React.createElement("div", { key: i },
                    React.createElement("h5", { className: "font-weight-normal title" },
                        React.createElement("div", { className: "mb-1" }, obj.title ||
                            (obj.titleEn && (React.createElement("span", null,
                                obj.title,
                                React.createElement("small", { className: "pl-1" },
                                    obj.titleEn,
                                    " :"))))),
                        React.createElement("div", { className: "small detail" },
                            React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(obj.detail) }))),
                    React.createElement("div", { className: "detail-list" },
                        React.createElement("h5", null, obj.listGroupTitle),
                        obj.listGroup && (React.createElement(ListGroup, { className: "mb-4" }, _this.mapListGroupItem(obj.listGroup))))));
            });
        };
        return _this;
    }
    Resume.prototype.componentDidMount = function () { };
    Resume.prototype.print = function () {
        if (document.execCommand("print")) {
            return;
        }
        window.print();
    };
    Resume.prototype.render = function () {
        var _this = this;
        this.authorData = this.props.store.authorData;
        return (React.createElement("div", { className: "resume pt-4 print-pt-0" },
            React.createElement("a", { className: "btn btn-outline-primary btn-tools btn-download print-d-none", href: this.authorData.pdfSrc + "?" + Date.now(), target: "_blank" },
                React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(downloadSvg) })),
            React.createElement("button", { className: "btn btn-outline-primary btn-tools btn-print print-d-none", onClick: function (e) { return _this.print(e); } },
                React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(printSvg) })),
            React.createElement("section", { className: "header" },
                React.createElement(PrintTopNav, null),
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 mb-3 text-right" },
                            React.createElement("h2", { className: "d-inline-block print-d-none" }, this.authorData.bigTitle.about),
                            React.createElement("h6", { className: "text-muted font-weight-light print-d-none" }, this.authorData && this.mapDetailListItems(this.authorData.info)))),
                    React.createElement("div", { className: "row align-items-center" },
                        React.createElement("div", { className: "col-12 col-md-4 col-lg-3 col-xl-2 image-box mb-5" },
                            React.createElement("div", { className: "col-12" },
                                React.createElement("img", { src: "static/image/me.jpg", className: "img-fluid img-me img-thumbnail rounded-circle" }))),
                        React.createElement("div", { className: "pl-md-4 col-12 col-md-8 col-lg-9 col-xl-10 detail-list" },
                            React.createElement("div", { className: "col-12" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData && this.authorData.bigTitle.personalData),
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" }, this.authorData && this.mapDetailListItems(this.authorData.basic)),
                                    React.createElement("div", { className: "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" }, this.authorData && this.mapDetailListItems(this.authorData.contact))))),
                        React.createElement("hr", { className: "my-4 mx-0" })),
                    React.createElement("div", { className: "row page-break-box" },
                        React.createElement("div", { className: "col-12 col-lg-6" },
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.summary),
                                this.authorData && this.authorData.summary.map(function (obj, i) { return (React.createElement("h5", { className: "title small font-weight-normal mb-2", key: i }, obj.detail)); }),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.education),
                                this.authorData && this.mapDetailListItems(this.authorData.education),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.jobs),
                                this.authorData && this.mapDetailListItems(this.authorData.jobs),
                                React.createElement("hr", { className: "my-4 mx-0" }))),
                        React.createElement(PrintTopNav, null),
                        React.createElement("div", { className: "col-12 col-lg-6" },
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.skill),
                                this.authorData && this.mapDetailListItems(this.authorData.skill),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.otherSkill),
                                this.authorData && this.mapDetailListItems(this.authorData.otherSkill),
                                React.createElement("hr", { className: "my-4 mx-0" }))),
                        React.createElement(PrintTopNav, null),
                        React.createElement("div", { className: "col-12 col-lg-6" },
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.projects),
                                this.authorData && this.mapDetailListItems(this.authorData.projects),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.pay),
                                this.authorData && this.mapDetailListItems(this.authorData.pay),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.autobiography),
                                this.mapDetailListItems(this.authorData.autobiography),
                                React.createElement("hr", { className: "my-4 mx-0" }))))))));
    };
    Resume = __decorate([
        inject("store"),
        observer
    ], Resume);
    return Resume;
}(React.Component));
export default withNamespaces("common")(Resume);
//# sourceMappingURL=Resume.js.map