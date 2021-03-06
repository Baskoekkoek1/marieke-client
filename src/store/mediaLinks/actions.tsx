import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

export type LinksData = { links: object[] };

export function mediaLinks(data: LinksData) {
  return {
    type: "LINKS_FETCHED",
    payload: data,
  };
}

export function fetchMediaLinks() {
  return async function thunk(dispatch: Function, getState: Function) {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/pages`);
    console.log("responseMEDIA", response.data);
    dispatch(mediaLinks(response.data));
    dispatch(appDoneLoading());
  };
}
