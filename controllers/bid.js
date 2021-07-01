const db = require('../models');

exports.getAllBidsForProduct = async (req, res, next) => {
  try {
    const bids = await db.bids.findAll({where:{productId:req.params.productId}});
    res.send(bids);
  } catch (err) {
    res.status(500).json(err);
  }

}

exports.getBidById = async (req, res, next) => {
  try {
    const bid = await db.bids.findByPk(req.params.id);
    res.send(bid);
  } catch (err) {
    res.status(500).json(err);
  }

}

exports.getMaxBYId = async (req, res, next) => {
    const pro = req.params.productId
    try {
        const max = await db.bids.max('bid',{where:{productId:pro}});
        const hightBid = await db.bids.findAll({where:{productId:pro,bid:max}})
        res.send(hightBid);
      } catch (err) {
        res.status(500).json(err);
      }
    
    }

    exports.addBidding = async (req, res, next) => {
      const pro = req.body
      try {
          const newBid = await db.bids.create(pro)
          res.send("New bid added");
        } catch (err) {
          res.status(500).json(err);
        }
      
      }