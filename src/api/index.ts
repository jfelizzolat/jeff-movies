import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: process.env.API_TOKEN,
  },
});

export default api;
