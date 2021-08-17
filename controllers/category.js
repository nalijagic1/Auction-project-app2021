const db = require('../models');

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await db.category.findAll();
    res.send(categories);
  } catch (err) {
    res.status(500).json(err);
  }

}

exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await db.category.findByPk(req.params.id);
    res.send(category);
  } catch (err) {
    res.status(500).json(err);
  }

}