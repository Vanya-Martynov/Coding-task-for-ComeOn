import axios from "axios";

const API_URL = "http://localhost:3001/";

const getGames = () => {
  return axios
    .get(API_URL + "games", {})
    .then((response) => {
      return response.data;
    });
};

export default getGames;