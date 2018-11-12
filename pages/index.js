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
import { initStore } from '../store/store';
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(props.isServer, props.lastUpdate);
        return _this;
    }
    Index.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer };
    };
    Index.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", null,
                React.createElement("section", { className: "header" },
                    React.createElement("div", { className: "container-fluid" },
                        React.createElement("div", { className: "row justify-content-center" },
                            React.createElement("div", { className: "col-offset-lg-2 col-lg-8" },
                                React.createElement("div", { className: "embed-responsive embed-responsive-16by9" },
                                    React.createElement("video", { autoPlay: true, loop: true, className: "embed-responsive-item", controls: true },
                                        React.createElement("source", { src: "static/video/Lamp-small.mp4", type: "video/mp4" }),
                                        "Your browser does not support the video tag.")))))))));
    };
    return Index;
}(React.Component));
export default Index;
//# sourceMappingURL=index.js.map