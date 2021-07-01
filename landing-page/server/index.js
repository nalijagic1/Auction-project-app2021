const express = require('express');
const { sequelize, init } = require('./models');
const cors = require('cors')

const category = require('./routes/category');
const product = require('./routes/product');

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

// TODO: Restrict only to production url
/*const corsOptions = {

  origin: [
    'http://localhost:3000',
    'http://192.168.0.22:8085',
    'https://nrsstudomat.hopto.org',
    'http://127.0.0.1:5500'

  ],
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'DELETE', 'HEAD', 'PATCH'],
  credentials: true
}*/
const app = express();
app.use(express.json());
//app.use(allowCrossDomain);
app.use(cors())

app.use('/categories', category);
app.use('/product',product)


const port = process.env.PORT || 3010

module.exports = app.listen(port, async () => {
  await sequelize.sync({ alert: true });
  console.log(`Server je pokrnut na portu ${port}`);
});