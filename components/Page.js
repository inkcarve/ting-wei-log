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
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.componentDidMount = function () {
        this.props.store.start();
    };
    Page.prototype.componentWillUnmount = function () {
        this.props.store.stop();
    };
    Page.prototype.render = function () {
        console.log(this);
        return (React.createElement("div", null, this.props.children));
    };
    return Page;
}(React.Component));
export default Page;
//# sourceMappingURL=Page.js.map