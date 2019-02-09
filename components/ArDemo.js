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
import "./ArDemo.scss";
import 'aframe';
import 'aframe-particle-system-component';
import { withNamespaces } from "../i18n/i18n";
var printSvg = require("../static/image/_ionicons_svg_md-print.svg");
var downloadSvg = require("../static/image/_ionicons_svg_md-download.svg");
var ArDemo = (function (_super) {
    __extends(ArDemo, _super);
    function ArDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.props.store.applyLanguage();
        return _this;
    }
    ArDemo.prototype.print = function () {
        if (document.execCommand("print")) {
            return;
        }
        window.print();
    };
    ArDemo.prototype.render = function () {
        return (React.createElement("div", { className: "ar-demo pt-4 print-pt-0" }));
    };
    ArDemo = __decorate([
        inject("store"),
        observer
    ], ArDemo);
    return ArDemo;
}(React.Component));
export default withNamespaces("common")(ArDemo);
//# sourceMappingURL=ArDemo.js.map