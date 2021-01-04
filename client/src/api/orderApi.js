import axiosClient from './axiosClient';

const orderApi = {
  order: (body) => {
    const url = `/transaction`;
    return axiosClient.post(url, body);
  },
  getTransaction: (id) => {
    const url = `/transaction/${id}`;
    return axiosClient.get(url);
  },
};

export default orderApi;
