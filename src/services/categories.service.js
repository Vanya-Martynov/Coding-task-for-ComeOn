import axios from "axios";

const API_URL = "http://localhost:3001/";

const getCategories = () => {
  return axios
    .get(API_URL + "categories")
    .then((response) => {
      return response.data;
    });
};

export default getCategories;