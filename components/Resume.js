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
import { ListGroup, ListGroupItem } from 'reactstrap';
import { initStore } from '../store/store';
import { dangeriousHtmlMarkup } from '../common/html-service';
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
            return (React.createElement(ListGroupItem, null,
                React.createElement("h5", { className: "font-weight-normal title" },
                    React.createElement("h5", null,
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
            return (React.createElement("div", null,
                React.createElement("h5", { className: "font-weight-normal title" },
                    React.createElement("h5", null,
                        obj.title,
                        React.createElement("small", { className: "pl-1" },
                            obj.titleEn,
                            " :")),
                    React.createElement("div", { className: "small detail" },
                        React.createElement("div", { dangerouslySetInnerHTML: dangeriousHtmlMarkup(obj.detail) }))),
                React.createElement("div", { className: "detail-list" },
                    React.createElement("h5", null, obj.listGroupTitle),
                    obj.listGroup ? (React.createElement(ListGroup, { className: "mb-4" }, _this.mapListGroupItem(obj.listGroup))) : '')));
        });
    };
    Resume.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", { className: "resume" },
                React.createElement("section", { className: "header" },
                    React.createElement("div", { className: "container-fluid" },
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-12 mb-4 text-right" },
                                React.createElement("h2", { className: "d-inline-block" }, "\u95DC\u65BC\u6211")),
                            React.createElement("div", { className: "col-12 d-flex align-items-center flex-column flex-md-row" },
                                React.createElement("div", { className: "image-box mb-5" },
                                    React.createElement("img", { src: "static/image/me.jpg", className: "img-fluid img-me img-thumbnail rounded-circle" })),
                                React.createElement("div", { className: "pl-md-4 detail-list flex-grow-1" },
                                    React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u57FA\u672C\u8CC7\u6599"),
                                    React.createElement("div", { className: "row" },
                                        React.createElement("div", { className: "col-12 col-md-6 col-lg-4 col-xl-3" }, this.mapDetailListItems(this.authorData.basic)),
                                        React.createElement("div", { className: "col-12 col-md-6 col-lg-4 col-xl-3" }, this.mapDetailListItems(this.authorData.contact))))),
                            React.createElement("div", { className: "col-12" },
                                React.createElement("hr", { className: "my-4 mx-2" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u524D\u7AEF\u76F8\u95DC\u6280\u80FD / Frontend skill"),
                                this.mapDetailListItems(this.authorData.skill)),
                            React.createElement("div", { className: "col-12" },
                                React.createElement("hr", { className: "my-4 mx-2" })),
                            React.createElement("div", { className: "col-12 d-flex flex-column justify-content-center detail-list" },
                                React.createElement("h4", { className: "mb-3 detail-list-title section-title" }, "\u975E\u524D\u7AEF\u76F8\u95DC\u6280\u80FD / Other skill"),
                                this.mapDetailListItems(this.authorData.otherSkill))))))));
    };
    return Resume;
}(React.Component));
export default Resume;
//# sourceMappingURL=Resume.js.map