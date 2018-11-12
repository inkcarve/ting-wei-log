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
import Head from '../components/Head';
import Nav from '../components/Nav';
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(props.isServer, props.lastUpdate);
        return _this;
    }
    Counter.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer };
    };
    Counter.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement("div", null,
                React.createElement(Head, null),
                React.createElement(Nav, null),
                React.createElement("div", { className: "container" },
                    React.createElement("h1", null, "React + NextJs + reactstrap")))));
    };
    return Counter;
}(React.Component));
export default Counter;
//# sourceMappingURL=other.js.map