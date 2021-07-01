const express = require('express');
const { getAllBidsForProduct, getBidById, getMaxBYId } = require('../controllers/bid');
const router = express.Router();
const db = require('../models');
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