const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Rank = sequelize.define('company_rank', {
    uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    rank: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
  });
  Rank.associate = (models) => {
    Rank.hasMany(models.User, { foreignKey: 'rank',targetKey: 'rank' });
    Rank.belongsTo(models.TranslatedWord, { foreignKey: 'name',targetKey: 'word' });
  };
  return Rank;
};
