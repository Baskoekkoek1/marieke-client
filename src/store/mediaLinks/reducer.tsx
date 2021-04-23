const initialState = {
  all_links: [],
  addLinkMode: false,
  deleteLinkMode: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "LINKS_FETCHED":
      return { all_links: action.payload };
    case "POST_LINK_SUCCESS":
      console.log("reducer", action.payload);
      return {
        ...state,
        all_links: [...state.all_links, action.payload],
      };
    case "TOGGLE_ADD_LINK_MODE":
      return { ...state, addLinkMode: !state.addLinkMode };
    case "TOGGLE_DELETE_LINK_MODE":
      return { ...state, deleteLinkMode: !state.deleteLinkMode };
    default:
      return state;
  }
}
