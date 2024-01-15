'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImagemPrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImagemPrato.init({
    idPrato: DataTypes.INTEGER,
    imagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ImagemPrato',
  });
  return ImagemPrato;
};