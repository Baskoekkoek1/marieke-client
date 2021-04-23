const initialState = {
  all_links: [],
  addLinkMode: false,
  deleteLinkMode: false,
};

type Link = {
  id: number;
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
    case "DELETE_LINK_SUCCESS":
      const linkId = action.payload;
      const newLinks = state.all_links.filter(
        (link: Link) => link.id !== linkId
      );
      return { ...state, all_links: newLinks };
    default:
      return state;
  }
}
