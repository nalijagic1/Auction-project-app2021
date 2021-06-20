'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bids extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.product.hasMany(this)
      models.user.hasMany(this)
    }
  };
  bids.init({
    id: DataTypes.INTEGER,
    bid: DataTypes.DOUBLE,
    bidDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'bids',
  });
  return bids;
};