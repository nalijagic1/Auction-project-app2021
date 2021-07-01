'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsTo(this)
    }
  };
  card.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cardType: DataTypes.STRING,
    cardOwner: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    expirationDate: DataTypes.DATE,
    cvc: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'card',
  });
  return card;
};