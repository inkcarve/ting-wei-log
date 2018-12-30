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
import { observer } from "mobx-react";
import "./Resume.scss";
import { ListGroup, ListGroupItem } from "reactstrap";
import { dangeriousHtmlMarkup } from "../common/html-service";
var MapDetailListItems = (function (_super) {
    __extends(MapDetailListItems, _super);
    function MapDetailListItems(props) {
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
            if (!lists) {
                return;
            }
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
    MapDetailListItems.prototype.render = function () {
        return React.createElement("div", null, this.mapDetailListItems(this.props.lists));
    };
    MapDetailListItems = __decorate([
        observer
    ], MapDetailListItems);
    return MapDetailListItems;
}(React.Component));
export default MapDetailListItems;
//# sourceMappingURL=MapDetailListItems.js.map