
module.exports = (sequelize, DataTypes) => {
  const Translate = sequelize.define('translate', {
    translated_words: {
      type: DataTypes.CHAR,
      primaryKey: true,
    },
    word: {
      type: DataTypes.CHAR,
    },
    lang: {
      type: DataTypes.CHAR,
    },
    translated_word: {
      type: DataTypes.CHAR,
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
  Translate.associate = (models) => {
    Translate.belongsTo(models.TranslatedWord, { foreignKey: 'word',targetKey:'word',as:'translating' });

  };
  return Translate;
};
