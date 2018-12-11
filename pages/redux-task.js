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
        console.log(initStore());
        return _this;
    }
    ReduxTask.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        return { isServer: isServer };
    };
    ReduxTask.prototype.render = function () {
        console.log('render');
        console.log(this);
        return (React.createElement("div", null,
            React.createElement(Provider, { store: this.store },
                React.createElement("div", { className: "container-fluid pt-4" },
                    React.createElement(CatchCat, null)))));
    };
    return ReduxTask;
}(React.Component));
export default ReduxTask;
//# sourceMappingURL=redux-task.js.map