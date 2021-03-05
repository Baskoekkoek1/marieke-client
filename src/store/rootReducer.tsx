import { combineReducers } from "redux";
import mediaLinks from "./mediaLinks/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  mediaLinks,
  appState,
});
