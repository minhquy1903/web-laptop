const express = require('express');

const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/', accountController.getAccounts);

module.exports = router;
// (req, res) => {
//     res.send('get Account');
//   }
