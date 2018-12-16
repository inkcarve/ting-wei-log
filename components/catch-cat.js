import * as React from "react";
import { connect } from "react-redux";
import { onReset, onCatch, onDog } from "../redux/actions";
import "./catch-cat.scss";
var CatchCat = function (_a) {
    var state = _a.state, onCatch = _a.onCatch, onReset = _a.onReset, onDog = _a.onDog;
    console.log(onCatch);
    var mapRooms = function (state) {
        return (React.createElement("div", { className: "row justify-content-center door py-2" },
            React.createElement("div", { className: "col-12" },
                React.createElement("h6", { className: "text-muted small w-100" }, "\u4E0B\u9762\u6709\u56DB\u9053\u9580\u8ACB\u9078\u64C7\u9032\u884C\u904A\u6232\uFF0C\u76F4\u5230\u627E\u5230\u5C0F\u8C93"),
                React.createElement("div", { className: "border w-100 d-flex flex-wrap " }, state.data.map(function (obj, i) {
                    return (React.createElement("div", { key: obj.id, className: "flex-grow-1 w-50 p-1" },
                        React.createElement("button", { className: "btn btn-" + obj.feature.color + " d-block w-100 rounded-0 py-4", onClick: function () {
                                onCatch(obj.id);
                            }, disabled: !state.ifPlaying },
                            "\u9580 ",
                            obj.id + 1)));
                })))));
    };
    return (React.createElement("div", { className: "catch-cat" },
        React.createElement("div", { className: "container-fluid pt-4" },
            React.createElement("div", { className: "row justify-content-center" },
                React.createElement("div", { className: "col-12 col-md-10 col-lg-8 col-xl-6" },
                    React.createElement("div", { className: "border-bottom mb-3" }, state.story.map(function (data, i) { return (React.createElement("h6", { className: "text-secondary font-weight-light", key: i }, data.text)); })),
                    React.createElement("div", { className: (state.log.length === 0 ? "d-none " : "") + "mb-3" }, state.log.map(function (data, i) {
                        if (data.end) {
                            return (React.createElement("h6", { className: "border-bottom", key: i }));
                        }
                        if (data.fontSize === 'strong') {
                            return (React.createElement("h4", { className: "text-" + (data.color ? data.color : 'warning'), key: i }, data.text));
                        }
                        return (React.createElement("h6", { className: "text-" + (data.color ? data.color : 'secondary') + " font-weight-light", key: i }, data.text));
                    })),
                    state.ifPlaying && mapRooms(state),
                    React.createElement("div", { className: "my-3 d-flex justify-content-end" },
                        React.createElement("button", { className: (state.ifDog || state.youReached < 3 ? "d-none " : "") + "btn btn-outline-secondary mr-2", onClick: onDog }, "\u4F7F\u7528\u9053\u5177"),
                        React.createElement("button", { className: "btn btn-outline-primary", onClick: onReset },
                            state.now !== null && "重新",
                            "\u958B\u59CB\u904A\u6232")))))));
};
var mapStateToProps = function (state) {
    console.log("mapStateToProps");
    return { state: state };
};
var mapDisptachToProps = function (dispatch, ownProps) {
    return {
        onCatch: function (id) {
            console.log(id);
            return dispatch(onCatch(id));
        },
        onReset: function () { return dispatch(onReset()); },
        onDog: function () { return dispatch(onDog()); }
    };
};
export default connect(mapStateToProps, mapDisptachToProps)(CatchCat);
//# sourceMappingURL=catch-cat.js.map