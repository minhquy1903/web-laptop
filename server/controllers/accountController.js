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
  const user = await Account.findOne({ username: req.body.username });
  if ((await bcrypt.compare(req.body.currentPassword, user.password)) === false)
    return res.status(200).json({ result: 'INCORRECT_PASSWORD' });
  const newPassword = await hashPassword(req.body.confirmPassword);

  await Account.updateOne(
    { username: req.body.username },
    { password: newPassword },
  );
  return res.status(200).json({ result: 'SUCCESS' });
};

const updateInformation = async (req, res) => {
  const defaultAvatar = 'https://i.ibb.co/s1PKtnW/avatar-default.png';
  let avatar = req.body.avatar;
  if (req.body.avatar === '') avatar = defaultAvatar;
  await Account.updateOne(
    { username: req.body.username },
    {
      avatar: avatar,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
    },
  );
  const user = await Account.findOne({ username: req.body.username });

  const infoUser = {
    id: user._id,
    username: user.username,
    avatar: user.avatar,
    name: user.name,
    address: user.address,
    phone: user.phone,
    email: user.email,
    type: user.type,
  };
  return res.status(200).json({ result: 'SUCCESS', infoUser: infoUser });
};

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await Account.findOne({ username: username });
  if (user === null) return res.json({ result: 'NOT_FOUND' });
  if ((await bcrypt.compare(password, user.password)) === true) {
    const infoUser = {
      id: user._id,
      username: user.username,
      avatar: user.avatar,
      name: user.name,
      address: user.address,
      phone: user.phone,
      email: user.email,
      type: user.type,
    };

    const userJwt = { username: username, password: password };

    const accessToken = jwt.sign(userJwt, accessTokenSecret);
    res.status(200).json({
      accessToken: accessToken,
      result: 'SUCCESS',
      infoUser: infoUser,
    });
  } else res.json({ result: 'NOT_FOUND' });
};

const register = async (req, res) => {
  if ((await Account.findOne({ username: req.body.username })) !== null)
    return res.status(400).json('USERNAME_HAS_TAKEN');
  const username = req.body.username;
  const password = await hashPassword(req.body.password);

  const account = new Account({
    username: username,
    password: password,
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    avatar: req.body.avatar,
    email: req.body.email,
    type: req.body.type,
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

const removeAccount = async (req, res) => {
  await Account.remove({ _id: req.params.id });
  res.json('SUCCESS');
};

const getAccount = async (req, res) => {
  const accounts = await Account.find({ type: 1 });
  res.json(accounts);
};

module.exports = {
  updatePassword,
  updateInformation,
  login,
  register,
  getAccount,
  removeAccount,
};
