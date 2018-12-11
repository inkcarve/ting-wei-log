import { createStore, applyMiddleware, bindActionCreators } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

let initialStateArray: any[] = [];
for (let i = 0; i < 4; i++) {
  initialStateArray.push({
    id: i,
    isActive: i === 0
  });
}

const initialState = {
  now: 0,
  reached: 1,
  ifCatch: false,
  ifSee: false,
  data: initialStateArray
};

export interface Action {
  type: string;
  id: number;
}

export const actionTypesMapping: any = {
  CATCH: "CATCH",
  RESET: "RESET"
};

const catchAction = (state: any, action: any) => {
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

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypesMapping.CATCH:
      return catchAction(state, action);
      break;
    default:
      return state;
  }
};

export const initStore = (data:any=initialState) => {
    return createStore(reducer, data, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
