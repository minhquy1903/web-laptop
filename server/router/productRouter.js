const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/laptop', productController.getAllProduct);
router.get('/laptop/:brand', productController.getAllProductOfBrand);
router.get('/laptop/detail/:id', productController.getDetailProduct);
router.get('/laptop/home/on-sale', productController.getOnSaleProduct);
router.get('/laptop/home/incoming', productController.getIncomingProduct);
router.post('/comment/add', productController.addComment);
router.post('/laptop/add', productController.addProduct);
router.put('/laptop/edit', productController.editProduct);
router.delete('/laptop/remove', productController.removeProduct);

module.exports = router;
