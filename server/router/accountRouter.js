const express = require('express');
const {
  authenticationToken,
} = require('../authentication/authenticationToken');

const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/', authenticationToken, accountController.getAccount);

router.put('/update/password', accountController.updatePassword);

router.put('/update/information', accountController.updateInformation);

router.post('/login', accountController.login);

router.post('/register', accountController.register);

router.delete(
  '/remove/:id',
  authenticationToken,
  accountController.removeAccount,
);

module.exports = router;
