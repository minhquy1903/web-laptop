const transactionModel = require('../models/transactionModel');
const Transaction = require('../models/transactionModel');

const saveOrder = async (req, res) => {
  const transaction = new Transaction({
    customer: {
      id: req.body.customerid,
      phone: req.body.phone,
      name: req.body.name,
      address: req.body.address,
    },
    products: req.body.products,
    total: req.body.total,
    date: req.body.date,
    status: false,
  });

  await transaction.save().then((data) => {
    // console.log(data);
    res.json('SUCEESS');
  });
};

const getTransaction = async (req, res) => {
  const transaction = await transactionModel.find({
    'customer.id': req.params.id,
  });

  if (transaction === null) return res.status(400);
  // console.log(transaction.length);
  res.json(transaction);
};
const getAllTransaction = async (req, res) => {
  const transactions = await transactionModel.find({});
  res.json(transactions);
};

const confirmTransaction = async (req, res) => {
  await transactionModel
    .findOneAndUpdate({ _id: req.params.id }, { status: true })
    .then((data) => res.json(data.status));
};

module.exports = {
  saveOrder,
  getTransaction,
  getAllTransaction,
  confirmTransaction,
};
