'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RelatorioAvaliacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RelatorioAvaliacao.init({
    relatorioId: DataTypes.INTEGER,
    avaliacaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RelatorioAvaliacao',
  });
  return RelatorioAvaliacao;
};