const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv/config');
const Account = require('../models/accountModel');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

async function hashPassword(_password) {
  console.log(_password);
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(_password, salt);
  return password;
}

const updatePassword = async (req, res) => {
  const password = await hashPassword(req.body.password);
  await Account.updateOne(
    { username: req.params.username },
    { password: password },
  );
  res.json('updated!!!');
};

const updateInfo = async (req, res) => {
  await Account.updateOne(
    { username: req.params.username },
    {
      info: {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
      },
    },
  );
  res.json('updated!!!');
};

const login = async (req, res) => {
  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  const user = await Account.findOne({ username: username });

  if (user === null) return res.json({ result: 'NOT_FOUND' });
  console.log('pass');
  if ((await bcrypt.compare(password, user.password)) === true) {
    const user = { username: username, password: password };

    const accessToken = jwt.sign(user, accessTokenSecret);
    res.status(200).json({ accessToken: accessToken, result: 'SUCCESS' });
  } else res.json({ result: 'NOT_FOUND' });
};

const register = async (req, res) => {
  console.log(req.body);
  if ((await Account.findOne({ username: req.body.username })) !== null)
    return res.status(400).json('user has taken');
  const username = req.body.username;
  const password = await hashPassword(req.body.password);

  const account = new Account({
    username: username,
    password: password,
    info: {
      email: req.body.info.email,
    },
  });
  account
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).json({ status: 1 });
    })
    .catch((err) => {
      console.error(err);
      res.json({ err: err, status: 0 });
    });
};

const getAccount = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

module.exports = { updatePassword, updateInfo, login, register, getAccount };
