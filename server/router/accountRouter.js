const express = require('express');

const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/', accountController.getAccount);

router.put('/update/password', accountController.updatePassword);

router.put('/update/information', accountController.updateInformation);

router.post('/login', accountController.login);

router.post('/register', accountController.register);

router.post('/remove/:id', accountController.removeAccount);

module.exports = router;
