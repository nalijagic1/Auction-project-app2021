//,getOldProducts

const db = require('../models');

exports.getProduct = async (req, res, next) => {
  try {
    const products = await db.product.findAll({include:[
        {model:db.category},
        {model:db.picture}
    ]});
    res.send(products);
  } catch (err) {
    res.status(500).json(err);
  }

}

exports.getProductById = async (req, res, next) => {
  try {
    const product = await db.product.findByPk(req.params.id,{include:[
        {model:db.category},
        {model:db.picture}
    ]});
    res.send(product);
  } catch (err) {
    res.status(500).json(err);
  }

}

exports.getNewProducts = async (req, res, next) => {
    try {
        const productsNew = await db.product.findAll(
            {order:[
                ['startingDate','DESC']],
            include:[
                {model:db.category},
                {model:db.picture}],
            limit:8
          }
        );
      res.send(productsNew);
    } catch (err) {
      res.status(500).json(err);
    }
  
}

exports.getOldProducts= async (req, res, next) => {
    try {
        const productsNew = await db.product.findAll(
            {order:[
                ['endingDate','ASC']],
              include:[
                {model:db.category},
                {model:db.picture}],
              limit:8  
              }
            
        );
      res.send(productsNew);
    } catch (err) {
      res.status(500).json(err);
    }
  
}