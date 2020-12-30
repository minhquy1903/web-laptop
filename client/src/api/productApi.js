const { default: axiosClient } = require('./axiosClient');

const productApi = {
  getAllProduct: () => {
    const url = `/product/laptop/`;
    return axiosClient.get(url);
  },
  getDetailProduct: (id) => {
    const url = `/product/laptop/detail/${id}`;
    return axiosClient.get(url);
  },
  getAllProductOfBrand: (id) => {
    const url = `/product/laptop/${id}`;
    console.log(url);
    return axiosClient.get(url);
  },
  getOnSaleProduct: () => {
    const url = `/product/laptop/home/on-sale`;
    return axiosClient.get(url);
  },
  getIncomingProduct: () => {
    const url = `/product/laptop/home/incoming`;
    return axiosClient.get(url);
  },
  addComment: (body) => {
    const url = `/product/comment/add`;
    return axiosClient.post(url, body);
  },
};

export default productApi;

// router.get('/laptop', productController.getAllProduct);
// router.get('/laptop/:brand', productController.getAllProductOfBrand);
// router.get('/laptop/detail/:id', productController.getDetailProduct);
// router.get('/laptop/home/on-sale', productController.getOnSaleProduct);
// router.get('/laptop/home/incoming', productController.getIncomingProduct);
// router.post('/comment/add', productController.addComment);
