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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import App, { Container } from 'next/app';
import Nav from '../components/Nav';
import { appWithTranslation } from '../i18n/i18n';
import '../scss/core.scss';
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyApp.prototype.render = function () {
        var _a = this.props, Component = _a.Component, pageProps = _a.pageProps;
        return (React.createElement(Container, null,
            React.createElement(Nav, null),
            React.createElement("div", { className: "main print-pt-0 print-mt-5" },
                React.createElement(Component, __assign({}, pageProps)))));
    };
    return MyApp;
}(App));
export default appWithTranslation(MyApp);
//# sourceMappingURL=_app.js.map