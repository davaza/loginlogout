import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import { reducer } from "../Reducers/reduser";
import { reducer } from "../Reducers/reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export { store as appStore };
