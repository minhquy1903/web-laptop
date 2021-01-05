const productModel = require('../models/productModel');

const getAllProduct = async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
};

const getAllProductOfBrand = async (req, res) => {
  const brand = req.params.brand;
  const subBrand = req.query.subBrand;
  console.log(subBrand);
  let products;
  if (subBrand === undefined)
    products = await productModel.find({
      'brand.name': brand,
    });
  else
    products = await productModel.find({
      'brand.name': brand,
      'brand.subBrand': subBrand,
    });
  res.json(products);
};

const getDetailProduct = async (req, res) => {
  const product = await productModel.findOne({
    _id: req.params.id,
  });
  res.json(product);
};

const getOnSaleProduct = async (req, res) => {
  const products = await productModel.find({ status: 'on_sale' });
  const onSaleProducts = [];
  for (let i = 0; i < products.length; i++) {
    onSaleProducts.push({
      name: products[i].name,
      brand: products[i].brand,
      price: products[i].price,
      _id: products[i]._id,
      sku: products[i].sku,
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
      _id: products[i]._id,
      sku: products[i].sku,
      images: products[i].images,
      discount: products[i].discount,
      status: products[i].status,
    });
  }
  res.json(incomingProducts);
};

const addComment = async (req, res) => {
  await productModel.updateOne(
    { _id: req.body.productID },
    {
      $push: {
        comments: {
          id: req.body.id,
          avatar: req.body.avatar,
          username: req.body.username,
          name: req.body.name,
          content: req.body.content,
          createdTime: req.body.createdTime,
          parentCommentID: req.body.parentComment,
        },
      },
    },
  );
  const listComment = await productModel.findOne({
    _id: req.body.productID,
  });
  res.json(listComment.comments);
};

const addProduct = async (req, res) => {
  const reqProduct = req.body;

  const product = new productModel(reqProduct);
  product.save().then((data) => {
    res.json(data);
  });
};
const editProduct = async (req, res) => {
  await productModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, doc) => {
      if (err) console.log(err);
      else
        doc.save().then((data) => {
          console.log(data);
          res.json(data);
        });
    },
  );
};
const removeProduct = async (req, res) => {
  await productModel.remove({ _id: req.params.id });
  res.json('SUCCESS');
};
module.exports = {
  getDetailProduct,
  getAllProductOfBrand,
  getAllProduct,
  getOnSaleProduct,
  getIncomingProduct,
  addComment,
  addProduct,
  editProduct,
  removeProduct,
};
