import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
//hold all the middlewares that you add eventually
const middlewares = [logger];
export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
