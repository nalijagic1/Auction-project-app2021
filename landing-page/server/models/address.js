'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
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
  address.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};