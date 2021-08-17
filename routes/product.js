const express = require('express');
const router = express.Router();
const { getProduct, getProductById,getNewProducts,getOldProducts} = require('../controllers/product');
const db = require('../models');
router
  .route('/')
  .get(getProduct)

router
    .route('/new')
    .get(getNewProducts)

router
    .route('/old')
    .get(getOldProducts)

router
  .route('/:id')
  .get(getProductById)




module.exports = router;