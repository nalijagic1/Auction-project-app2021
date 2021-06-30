const express = require('express');
const path = require('path');
const { sequelize, init } = require('./models');

const category = require('./routes/category');
const product = require('./routes/product');

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
const app = express();
const buildPath = path.join(__dirname, '..','client', 'build');
app.use(express.static(buildPath));


app.use(express.json());
app.use(allowCrossDomain);

app.use('/categories', category);
app.use('/product',product)


const port = process.env.PORT || 3010

module.exports = app.listen(port, async () => {
  await sequelize.sync({ alert: true });
  console.log()
  console.log(`Server je pokrnut na portu ${port}`);
});