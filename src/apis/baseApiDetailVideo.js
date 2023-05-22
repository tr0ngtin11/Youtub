import axios from 'axios';

const instanceDetail = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {},
  headers: {},
});

export default instanceDetail;
