const express = require('express');

const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.get('/', transactionController.getAllTransaction);
router.get('/:id', transactionController.getTransaction);
router.post('/', transactionController.saveOrder);
router.put('/:id', transactionController.confirmTransaction);
module.exports = router;
