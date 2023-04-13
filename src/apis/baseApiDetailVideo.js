import axios from "axios";

const instanceDetail = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    part: "contentDetails,snippet",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
});

export default instanceDetail;
