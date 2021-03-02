const initialState = {
  all_links: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "LINKS_FETCHED":
      return { all_links: action.payload };
    default:
      return state;
  }
}
