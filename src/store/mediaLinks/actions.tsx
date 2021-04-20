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

export const postMediaLink = (
  description: String,
  imgLink: String,
  link: String,
  tag: String,
  title: String
) => {
  return async (dispatch: Function, getState: Function) => {
    const { token } = selectAdmin(getState());
    const response = await axios.post(
      `${apiUrl}/pages/medialink`,
      { description, imgLink, link, tag, title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
};
