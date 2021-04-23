import axios from "axios";
import { useSelector } from "react-redux";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";
import { selectAdmin } from "../auth/selectors";

export type LinksData = { links: object[] };

export function mediaLinks(data: LinksData) {
  return {
    type: "LINKS_FETCHED",
    payload: data,
  };
}

export const postMediaLinkSuccess = (link: Object) => ({
  type: "POST_LINK_SUCCESS",
  payload: link,
});

export function fetchMediaLinks() {
  return async function thunk(dispatch: Function, getState: Function) {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/pages`);
    console.log("responseMEDIA", response.data);
    dispatch(mediaLinks(response.data));
    dispatch(appDoneLoading());
  };
}

export function toggleAddLinkMode() {
  return {
    type: "TOGGLE_ADD_LINK_MODE",
    payload: null,
  };
}

export function toggleDeleteLinkMode() {
  return {
    type: "TOGGLE_DELETE_LINK_MODE",
    payload: null,
  };
}

export const postMediaLink = (
  title: String,
  description: String,
  tag: String,
  link: String,
  imgLink: String
) => {
  return async (dispatch: Function, getState: Function) => {
    console.log("TEST_ACTION", title, description, tag, link, imgLink);
    const { token } = selectAdmin(getState());
    const response = await axios.post(
      `${apiUrl}/pages/medialink`,
      { title, description, tag, link, imgLink },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(postMediaLinkSuccess(response.data));
  };
};
