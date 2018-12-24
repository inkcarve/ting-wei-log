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
import { Provider } from 'react-redux';
import { initStore } from '../redux/redux-store';
import CatchCat from '../components/catch-cat';
var ReduxTask = (function (_super) {
    __extends(ReduxTask, _super);
    function ReduxTask(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore();
        return _this;
    }
    ReduxTask.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        return { isServer: isServer };
    };
    ReduxTask.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Provider, { store: this.store },
                React.createElement("div", { className: "container-fluid pt-4" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 mb-md-4 text-right" },
                            React.createElement("h2", { className: "d-inline-block print-d-none text-primary" }, "\u4EAE\u6676\u6676\u7684\u5C0F\u8C93"),
                            React.createElement("br", null),
                            React.createElement("h6", { className: "text-muted font-weight-light d-inline-block border-bottom pl-4 pb-2" },
                                React.createElement("span", { className: "text-warning" }, "The Shining Cat (Not support english content now)"),
                                React.createElement("br", null),
                                React.createElement("small", null, "\u4E00\u500B\u5EFA\u7ACB\u5728 Redux \u8207 React-Redux \u7684\u904A\u6232"),
                                React.createElement("div", { className: "" })))),
                    React.createElement(CatchCat, null)))));
    };
    return ReduxTask;
}(React.Component));
export default ReduxTask;
//# sourceMappingURL=redux-game.js.map