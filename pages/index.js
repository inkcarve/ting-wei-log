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
import { initStore } from "../store/store";
import './index.scss';
var PageIndex = (function (_super) {
    __extends(PageIndex, _super);
    function PageIndex(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(props.isServer, props.lastUpdate);
        return _this;
    }
    PageIndex.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer };
    };
    PageIndex.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row justify-content-center" },
                    React.createElement("div", { className: "col-12 p-0 position-relative" },
                        React.createElement("div", { className: "embed-responsive embed-responsive-16by9 position-relative index-bg-box d-flex align-items-center" },
                            React.createElement("div", { className: "d-none d-md-block col-md-4 text-right" },
                                React.createElement("a", { className: "btn btn-outline-light mr-4 px-md-5 py-md-4", href: "/resume" },
                                    React.createElement("h2", null, "More")))),
                        React.createElement("div", { className: "d-md-none text-center my-5" },
                            React.createElement("a", { className: "btn btn-outline-primary px-5 py-2", href: "/resume" },
                                React.createElement("h2", null, "More"))))))));
    };
    return PageIndex;
}(React.Component));
export default PageIndex;
//# sourceMappingURL=index.js.map