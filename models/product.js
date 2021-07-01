'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.category.hasMany(this)
      models.picture.belongsTo(this)
      models.wishlist.belongsTo(this)
      models.bids.belongsTo(this)
      models.user.hasMany(this,{as: 'seller'})
    }
  };
  product.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startingPrice: DataTypes.DOUBLE,
    startingDate: DataTypes.DATE,
    endingDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};