import { combineReducers } from "redux";
import mediaLinks from "./mediaLinks/reducer";
import appState from "./appState/reducer";
import auth from "./auth/reducer";

export default combineReducers({
  mediaLinks,
  appState,
  auth,
});
