const models = {
  User: sequelize.import('./user'),
  UserDetail: sequelize.import('./userDetail'),
  UserValues: sequelize.import('./UserValues'),
  Rank: sequelize.import('./rank'),
  Media: sequelize.import('./media'),
  TranslatedWord: sequelize.import('./translatedWord'),
  Translate: sequelize.import('./translate'),
};
Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
module.exports = models;
