const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAccounts = (req, res) => {
  res.json('GET account/');
};

module.exports = { getAccounts };
