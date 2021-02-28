'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Berita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Berita.init({
    judul: DataTypes.STRING,
    body: DataTypes.STRING,
    tanggal_terbit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Berita',
  });
  return Berita;
};