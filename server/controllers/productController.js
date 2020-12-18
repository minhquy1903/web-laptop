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
  console.log('zooo');
  const product = await productModel.findOne({
    productID: req.params.id,
  });
  res.json(product);
};

const getOnSaleProduct = async (req, res) => {
  const products = await productModel.find({ status: 'on_sale' });
  const onSaleProducts = [];
  let onSaleProduct;
  for (let i = 0; i < products.length; i++) {
    onSaleProducts.push({
      name: products[i].name,
      brand: products[i].brand,
      price: products[i].price,
      id: products[i].productID,
      images: products[i].images,
      discount: products[i].discount,
      status: products[i].status,
    });
  }
  res.json(onSaleProducts);
};

const getIncomingProduct = async (req, res) => {
  const products = await productModel.find({ status: 'incoming' });
  const incomingProducts = [];
  for (let i = 0; i < products.length; i++) {
    incomingProducts.push({
      name: products[i].name,
      brand: products[i].brand,
      price: products[i].price,
      id: products[i].productID,
      images: products[i].images,
      discount: products[i].discount,
      status: products[i].status,
    });
  }
  res.json(incomingProducts);
};

const addComment = async (req, res) => {
  console.log(req.body);
  await productModel.updateOne(
    { productID: req.body.productID },
    {
      reviews: {
        $push: {
          comments: [
            {
              username: req.body.username,
              name: req.body.name,
              content: req.body.content,
              createdTime: req.body.createdTime,
              parentCommentID: req.body.parentCommentID,
            },
          ],
        },
      },
    },
  );

  res.json('success!!');
};

module.exports = {
  getDetailProduct,
  getAllProductOfBrand,
  getAllProduct,
  getOnSaleProduct,
  getIncomingProduct,
  addComment,
};
