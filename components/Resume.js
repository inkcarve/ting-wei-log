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
import { dangeriousHtmlMarkup } from "../common/html-service";
import PrintTopNav from "../components/PrintTopNav";
import { withNamespaces } from "../i18n/i18n";
import MapDetailListItems from "./MapDetailListItems";
import { computed } from "mobx";
var printSvg = require("../static/image/_ionicons_svg_md-print.svg");
var downloadSvg = require("../static/image/_ionicons_svg_md-download.svg");
function Summary(props) {
    if (!props.data) {
        return;
    }
    return props.data.map(function (obj, i) { return (React.createElement("h5", { className: "title small font-weight-normal mb-2", key: i }, obj.detail)); });
}
var Resume = (function (_super) {
    __extends(Resume, _super);
    function Resume(props) {
        var _this = _super.call(this, props) || this;
        _this.props.store.applyLanguage();
        return _this;
    }
    Object.defineProperty(Resume.prototype, "authorData", {
        get: function () {
            return this.props.store.authorData;
        },
        enumerable: true,
        configurable: true
    });
    Resume.prototype.print = function () {
        if (document.execCommand("print")) {
            return;
        }
        window.print();
    };
    Resume.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "resume pt-4 print-pt-0" },
            React.createElement("a", { className: "btn btn-outline-primary btn-tools btn-download print-d-none", href: this.authorData.pdfSrc + "?" + Date.now(), target: "_blank" },
                React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(downloadSvg) })),
            React.createElement("button", { className: "btn btn-outline-primary btn-tools btn-print print-d-none", onClick: function () { return _this.print(); } },
                React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(printSvg) })),
            React.createElement("section", { className: "header" },
                React.createElement(PrintTopNav, null),
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 mb-3 text-right" },
                            React.createElement("h2", { className: "d-inline-block print-d-none" }, this.authorData.bigTitle.about),
                            React.createElement("h6", { className: "text-muted font-weight-light print-d-none" },
                                React.createElement(MapDetailListItems, { lists: this.authorData.info })))),
                    React.createElement("div", { className: "row align-items-center" },
                        React.createElement("div", { className: "col-12 col-md-4 col-lg-3 col-xl-2 image-box mb-5" },
                            React.createElement("div", { className: "col-12" },
                                React.createElement("img", { src: "static/image/me.jpg", className: "img-fluid img-me img-thumbnail rounded-circle" }))),
                        React.createElement("div", { className: "pl-md-4 col-12 col-md-8 col-lg-9 col-xl-10 detail-list" },
                            React.createElement("div", { className: "col-12" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData && this.authorData.bigTitle.personalData),
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" },
                                        React.createElement(MapDetailListItems, { lists: this.authorData.basic })),
                                    React.createElement("div", { className: "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" },
                                        React.createElement(MapDetailListItems, { lists: this.authorData.contact }))))),
                        React.createElement("hr", { className: "my-4 mx-0" })),
                    React.createElement("div", { className: "row page-break-box" },
                        React.createElement("div", { className: "col-12 col-lg-6" },
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.summary),
                                React.createElement(Summary, { data: this.authorData.summary }),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.education),
                                React.createElement(MapDetailListItems, { lists: this.authorData.education }),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.jobs),
                                React.createElement(MapDetailListItems, { lists: this.authorData.jobs }),
                                React.createElement("hr", { className: "my-4 mx-0" }))),
                        React.createElement(PrintTopNav, null),
                        React.createElement("div", { className: "col-12 col-lg-6" },
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.skill),
                                React.createElement(MapDetailListItems, { lists: this.authorData.skill }),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.otherSkill),
                                React.createElement(MapDetailListItems, { lists: this.authorData.otherSkill }),
                                React.createElement("hr", { className: "my-4 mx-0" }))),
                        React.createElement(PrintTopNav, null),
                        React.createElement("div", { className: "col-12 col-lg-6" },
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.projects),
                                React.createElement(MapDetailListItems, { lists: this.authorData.projects }),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.pay),
                                React.createElement(MapDetailListItems, { lists: this.authorData.pay }),
                                React.createElement("hr", { className: "my-4 mx-0" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, this.authorData.bigTitle.autobiography),
                                React.createElement(MapDetailListItems, { lists: this.authorData.autobiography }),
                                React.createElement("hr", { className: "my-4 mx-0" }))))))));
    };
    __decorate([
        computed
    ], Resume.prototype, "authorData", null);
    Resume = __decorate([
        inject("store"),
        observer
    ], Resume);
    return Resume;
}(React.Component));
export default withNamespaces("common")(Resume);
//# sourceMappingURL=Resume.js.map