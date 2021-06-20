'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
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
  wishlist.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    buyerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'wishlist',
  });
  return wishlist;
};