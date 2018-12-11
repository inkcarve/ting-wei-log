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
import Resume from '../components/Resume';
var PageResume = (function (_super) {
    __extends(PageResume, _super);
    function PageResume(props) {
        var _this = _super.call(this, props) || this;
        _this.store = initStore(props.isServer, props.lastUpdate);
        return _this;
    }
    PageResume.getInitialProps = function (_a) {
        var req = _a.req;
        var isServer = !!req;
        var store = initStore(isServer);
        return { lastUpdate: store.lastUpdate, isServer: isServer };
    };
    PageResume.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement(Resume, null)));
    };
    return PageResume;
}(React.Component));
export default PageResume;
//# sourceMappingURL=resume.js.map