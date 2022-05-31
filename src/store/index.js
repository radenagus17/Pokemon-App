import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middlewares = applyMiddleware(logger, thunk);
const store = createStore(reducer, middlewares);

export default store;
