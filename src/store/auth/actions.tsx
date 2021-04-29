import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectAdmin, selectToken } from "./selectors";

export function loginSuccess(userWithToken: any) {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
}

const tokenStillValid = (userWithoutToken: any) => ({
  type: "TOKEN_STILL_VALID",
  payload: userWithoutToken,
});

const loginFailed = () => {
  return {
    type: "LOGIN_FAILED",
    payload: null,
  };
};

const currentPasswordFail = () => {
  return {
    type: "CURRENT_PASSWORD_FAIL",
    payload: null,
  };
};

export const checkPasswordFail = () => {
  return {
    type: "CHECK_PASSWORD_FAIL",
    payload: null,
  };
};

const changePasswordSucces = () => {
  return {
    type: "CHANGE_PASSWORD_SUCCESS",
    payload: null,
  };
};

export function login(name: string, password: string) {
  return async function thunk(dispatch: Function, getState: Function) {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        name,
        password,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(loginFailed());
      } else {
        console.log(error.message);
        dispatch(loginFailed());
      }
    }
  };
}

export const userLogOut = () => ({ type: "LOGOUT" });

export const getUserWithStoredToken = () => {
  return async (dispatch: Function, getState: Function) => {
    const token = selectToken(getState());
    if (token === null || token === "failed") return;

    try {
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(tokenStillValid(response.data));
      console.log("VALID TOKEN", response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(userLogOut());
    }
  };
};

export const changePassword = (
  password: string | undefined,
  id: number | undefined,
  currentPassword: string | undefined
) => {
  return async (dispatch: Function, getState: Function) => {
    try {
      const { token } = selectAdmin(getState());
      const response = await axios.put(
        `${apiUrl}/auth/changepass`,
        {
          password,
          id,
          currentPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      if (response.data === "Current password incorrect") {
        dispatch(currentPasswordFail());
      } else {
        dispatch(changePasswordSucces());
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
};
