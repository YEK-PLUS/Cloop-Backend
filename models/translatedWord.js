
module.exports = (sequelize, DataTypes) => {
  const TranslatedWord = sequelize.define('translated_word', {
    uid: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    word: {
      type: DataTypes.CHAR,
      primaryKey: true
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
  TranslatedWord.associate = (models) => {
    TranslatedWord.hasMany(models.Rank, { foreignKey: 'word',targetKey: 'name' });
    TranslatedWord.hasMany(models.Translate, { foreignKey: 'word',targetKey: 'word' });
  };
  return TranslatedWord;
};
