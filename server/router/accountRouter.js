const express = require('express');

const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/', accountController.getAccount);

router.put('/update/password/:username', accountController.updatePassword);

router.put('/update/infomation/:username', accountController.updateInfomation);

router.post('/login', accountController.login);

router.post('/register', accountController.register);

module.exports = router;
