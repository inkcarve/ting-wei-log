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
var PageAbout = (function (_super) {
    __extends(PageAbout, _super);
    function PageAbout(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(props.isServer, props.lastUpdate);
        return _this;
    }
    PageAbout.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer };
    };
    PageAbout.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", null,
                React.createElement("div", { className: "container-fluid pt-4" },
                    React.createElement("h3", null, "Website :"),
                    React.createElement("h5", { className: "text-primary font-weight-normal mb-4" }, "ReactJs + NextJs + reactstrap + typescript + bootstrap4 + mobx + mobx-react"),
                    React.createElement("h3", null, "The Shining Cat : "),
                    React.createElement("h5", { className: "text-primary font-weight-normal" }, "ReactJs + NextJs + reactstrap + typescript + bootstrap4 + redux + react-redux")))));
    };
    return PageAbout;
}(React.Component));
export default PageAbout;
//# sourceMappingURL=about.js.map