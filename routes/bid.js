const express = require('express');
const { getAllBidsForProduct, getBidById, getMaxBYId, addBidding } = require('../controllers/bid');
const router = express.Router();
const db = require('../models');

router
    .route('/')
    .post(addBidding)

router
  .route('/product/:productId')
  .get(getAllBidsForProduct)

router
  .route('/:id')
  .get(getBidById)

router
    .route('/max/:productId')
    .get(getMaxBYId)
module.exports = router;