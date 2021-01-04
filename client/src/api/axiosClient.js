import axios from 'axios';
import queryString from 'query-string';
import 'dotenv/config';
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // console.log(config);
  return config;
});

axiosClient.interceptors.response.use(
  async (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err;
  },
);

export default axiosClient;
