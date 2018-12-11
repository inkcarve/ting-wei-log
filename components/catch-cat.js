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
import { connect } from 'react-redux';
var CatchCat = (function (_super) {
    __extends(CatchCat, _super);
    function CatchCat(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props;
        return _this;
    }
    CatchCat.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        return { isServer: isServer };
    };
    CatchCat.prototype.render = function () {
        console.log('catch-cat');
        console.log(this);
        var state = this.props.state;
        return (React.createElement("div", null,
            React.createElement("div", { className: "container-fluid pt-4" },
                React.createElement("h1", null, state))));
    };
    return CatchCat;
}(React.Component));
var mapStateToProps = function (state) {
    return { state: state };
};
export default connect(function (state) { return state; })(CatchCat);
//# sourceMappingURL=catch-cat.js.map