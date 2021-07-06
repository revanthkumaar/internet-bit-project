import {
    combineReducers
} from "redux";
import currentUser from "./userReducer";
import bookCounter from "./bookReducer";
import createBookReducer from "./bookReducer";


const rootReducer = combineReducers({
  currentUser,
  bookCounter,
  createBookReducer
});

export default rootReducer;
