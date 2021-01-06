const express = require('express');

const transactionController = require('../controllers/transactionController');
const {
  authenticationToken,
} = require('../authentication/authenticationToken');

const router = express.Router();

router.get('/', authenticationToken, transactionController.getAllTransaction);
router.get('/:id', transactionController.getTransaction);
router.post('/', transactionController.saveOrder);
router.put(
  '/:id',
  authenticationToken,
  transactionController.confirmTransaction,
);
module.exports = router;
