import { combineReducers } from "redux";
import feedList from "./feedList";
import loading from "./loading";

const rootReducer = combineReducers({
  feedList,
  loading,
});

export default rootReducer;
