type State = {
  auth: {
    name: string;
    token: string;
    id: number;
    passwordMessage: string;
  };
};

export const selectToken = (state: State) => state.auth.token;

export const selectAdmin = (state: State) => state.auth;
