import * as React from 'react';
export default function (props) {
    return (React.createElement("div", { className: props.light ? 'light' : '' }, format(new Date(props.lastUpdate))));
};
var format = function (t) { return pad(t.getUTCHours()) + ":" + pad(t.getUTCMinutes()) + ":" + pad(t.getUTCSeconds()); };
var pad = function (n) { return n < 10 ? "0" + n : n; };
//# sourceMappingURL=Clock.js.map