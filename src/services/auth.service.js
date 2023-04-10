import axios from "axios";

const API_URL = "http://localhost:3001/";

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const Auth = {
  login,
  logout,
};

export default Auth;