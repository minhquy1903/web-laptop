import axiosClient from './axiosClient';

const accountApi = {
  updateInformation: (body) => {
    const url = `/account/update/information`;
    return axiosClient.put(url, body);
  },
  updatePassword: (body) => {
    const url = `/account/update/password`;
    return axiosClient.put(url, body);
  },
  login: (body) => {
    const url = `/account/login`;
    return axiosClient.post(url, body);
  },
  register: (body) => {
    const url = `/account/register`;
    return axiosClient.post(url, body);
  },
};

export default accountApi;
