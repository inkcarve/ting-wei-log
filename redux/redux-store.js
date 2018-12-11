import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
var initialStateArray = [];
for (var i = 0; i < 4; i++) {
    initialStateArray.push({
        id: i,
        isActive: i === 0
    });
}
var initialState = {
    now: 0,
    reached: 1,
    ifCatch: false,
    ifSee: false,
    data: initialStateArray
};
export var actionTypesMapping = {
    CATCH: "CATCH",
    RESET: "RESET"
};
var catchAction = function (state, action) {
    if (action.id === state.now) {
        state.data[state.now].ifactive = true;
        state.now++;
        state.reached++;
        state.ifSee = true;
        state.ifCatch = state.reached === state.data.length;
        return state;
    }
    state.ifSee = false;
    return state;
};
export var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypesMapping.CATCH:
            return catchAction(state, action);
            break;
        default:
            return state;
    }
};
export var initStore = function (data) {
    if (data === void 0) { data = initialState; }
    return createStore(reducer, data, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
//# sourceMappingURL=redux-store.js.map