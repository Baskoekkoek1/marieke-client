const initialState = {
  name: null,
  token: localStorage.getItem("token"),
  passwordMessage: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case "TOKEN_STILL_VALID":
      return { ...state, ...action.payload };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    case "LOGIN_FAILED": {
      return { ...state, token: "failed" };
    }
    case "CHANGE_PASSWORD_SUCCESS": {
      return { ...state, passwordMessage: "Nieuw wachtwoord opgeslagen." };
    }
    case "CURRENT_PASSWORD_FAIL": {
      return { ...state, passwordMessage: "Huidig wachtwoord onjuist." };
    }
    case "CHECK_PASSWORD_FAIL": {
      return {
        ...state,
        passwordMessage:
          "Nieuw wachtwoord en herhaald wachtwoord komen niet overeen.",
      };
    }
    default:
      return state;
  }
};
