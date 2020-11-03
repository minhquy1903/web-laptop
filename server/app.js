const express = require('express');

const db = require('./db');
const indexRouter = require('./router/indexRouter');
const accountRouter = require('./router/accountRouter');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/', indexRouter);
app.use('/account', accountRouter);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else {
    console.log('server is running on port ', PORT);
    db;
  }
});
