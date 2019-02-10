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
import { Provider, observer } from "mobx-react";
import { initStore } from "../store/store";
import VrDemo from "../components/VrDemo";
var PageVr = (function (_super) {
    __extends(PageVr, _super);
    function PageVr(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(typeof window === 'undefined', props.lastUpdate);
        return _this;
    }
    PageVr.getInitialProps = function () {
        var isServer = typeof window === 'undefined';
        console.log('isServer ' + isServer);
        console.log(typeof window);
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer };
    };
    PageVr.prototype.render = function () {
        if (typeof window === 'undefined') {
            return (React.createElement("div", null,
                React.createElement("h2", { className: "d-none" }, "VR Demo")));
        }
        return (React.createElement(Provider, { store: this.store },
            React.createElement(VrDemo, null)));
    };
    PageVr = __decorate([
        observer
    ], PageVr);
    return PageVr;
}(React.Component));
export default PageVr;
//# sourceMappingURL=vr.js.map