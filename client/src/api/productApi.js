const { default: axiosClient } = require('./axiosClient');

const productApi = {
  getAllProduct: () => {
    const url = '/product/laptop';
    return axiosClient.get(url);
  },
  getDetailProduct: (id) => {
    const url = `/product/laptop/detail/${id}`;
    console.log(url);
    return axiosClient.get(url);
  },
};

export default productApi;
