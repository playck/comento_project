import { combineReducers } from "redux";
import feedList from "./feedList";
import adsList from "./adsList";
import loading from "./loading";

const rootReducer = combineReducers({
  feedList,
  adsList,
  loading,
});

export default rootReducer;
