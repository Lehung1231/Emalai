import axios from "./config.js";

const getCategories = () => {
  return axios.get(`/categories`);
};

export { getCategories };
