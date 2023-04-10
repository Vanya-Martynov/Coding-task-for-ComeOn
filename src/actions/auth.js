import Auth from "../services/auth.service";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

export const login = (username, password) => (dispatch) => {
  return Auth.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  Auth.logout();

  dispatch({
    type: LOGOUT,
  });
};