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
import { withNamespaces } from '../i18n/i18n';
var PageIndex = (function (_super) {
    __extends(PageIndex, _super);
    function PageIndex(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(typeof window === undefined, props.lastUpdate);
        return _this;
    }
    PageIndex.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = typeof window === undefined;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer, namespacesRequired: ['common', 'Index'] };
    };
    PageIndex.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row justify-content-center" },
                    React.createElement("div", { className: "col-12 p-0 position-relative" },
                        React.createElement("div", { className: "embed-responsive embed-responsive-16by9 position-relative index-bg-box d-flex align-items-center" },
                            React.createElement("div", { className: "d-none d-md-block col-md-5 text-right" },
                                React.createElement("a", { className: "btn btn-outline-light mr-4 px-md-5 py-md-4 mb-3 col-md-12 col-lg-10 col-xl-8", href: "/redux-game" },
                                    React.createElement("h3", null, this.props.t('reduxGame'))),
                                React.createElement("a", { className: "btn btn-outline-light mr-4 px-md-5 py-md-4 col-md-12 col-lg-10 col-xl-8", href: "/resume" },
                                    React.createElement("h3", null, this.props.t('author'))))),
                        React.createElement("div", { className: "d-md-none text-center my-5" },
                            React.createElement("a", { className: "btn btn-outline-primary px-2 py-2 mb-3 col-8", href: "/redux-game" },
                                React.createElement("h4", null, "The Shining Cat")),
                            React.createElement("a", { className: "btn btn-outline-primary px-2 py-2 col-8", href: "/resume" },
                                React.createElement("h4", null, "More about Me"))))))));
    };
    return PageIndex;
}(React.Component));
export default withNamespaces(['Index', 'common'])(PageIndex);
//# sourceMappingURL=index.js.map