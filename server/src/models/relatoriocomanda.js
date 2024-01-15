'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RelatorioComanda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RelatorioComanda.init({
    relatorioId: DataTypes.INTEGER,
    comandaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RelatorioComanda',
  });
  return RelatorioComanda;
};