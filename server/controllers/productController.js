const productModel = require('../models/productModel');

const getAllProduct = async (req, res) => {
  console.log('zoooo');
  const products = await productModel.find({});
  res.json(products);
};

const getAllProductOfBrand = async (req, res) => {
  console.log(req.params.brand);

  const products = await productModel.find({ brand: req.params.brand });
  res.json(products);
};

const getDetailProduct = async (req, res) => {
  const product = await productModel.findOne({
    productID: req.query.productID,
  });
  res.json(product);
};

const getOnSaleProduct = async (req, res) => {
  const products = await productModel.find({ status: 'on_sale' });

  res.json(products);
};

const getIncomingProduct = async (req, res) => {
  const products = await productModel.find({ status: 'incoming' });

  res.json(products);
};
module.exports = {
  getDetailProduct,
  getAllProductOfBrand,
  getAllProduct,
  getOnSaleProduct,
  getIncomingProduct,
};
