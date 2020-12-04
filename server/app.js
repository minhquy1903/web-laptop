const express = require('express');

const db = require('./db');
// const indexRouter = require('./router/indexRouter');
const accountRouter = require('./router/accountRouter');
const productRouter = require('./router/productRouter');
const transactionRouter = require('./router/transactionRouter');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
// app.use('/', indexRouter);
app.use('/api/account', accountRouter);
app.use('/api/product', productRouter);
app.use('/api/transaction', transactionRouter);
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else {
    console.log('server is running on port ', PORT);
    db;
  }
});
