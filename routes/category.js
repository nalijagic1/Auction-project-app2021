const express = require('express');
const router = express.Router();
const { getCategories, getCategoryById} = require('../controllers/category');
const db = require('../models');
router
  .route('/')
  .get(getCategories)


router
  .route('/:id')
  .get(getCategoryById)
module.exports = router;