import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index.js";

const logger = createLogger({
  //options
});

export default function configureStore(state) {
  return createStore(rootReducer, state, applyMiddleware(logger));
}
