const initialState = {
  name: null,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case "TOKEN_STILL_VALID":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return { ...initialState, token: null };
    default:
      return state;
  }
};
