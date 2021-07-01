'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.address.hasOne(this)
      models.card.hasOne(this)
      models.wishlist.belongsTo(this)
      models.bids.belongsTo(this)
      models.product.belongsTo(this)
    }
  };
  user.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.CHAR,
    dateOfBirth: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pictureId: DataTypes.STRING,
    userType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};