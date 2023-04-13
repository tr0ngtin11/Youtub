import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: { playlistId: "RDZiQo7nAkQHU", part: "snippet", maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.items;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;