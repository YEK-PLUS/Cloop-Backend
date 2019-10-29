const models = {
  User: sequelize.import('./user'),
  UserDetail: sequelize.import('./userDetail'),
  UserValues: sequelize.import('./UserValues'),
  Rank: sequelize.import('./rank'),
  Department: sequelize.import('./department'),
  Media: sequelize.import('./media'),
  TranslatedWord: sequelize.import('./translatedWord'),
  Translate: sequelize.import('./translate'),
  Notification: sequelize.import('./notification'),
  UserNotification: sequelize.import('./user-notification'),
  DepartmentNotification: sequelize.import('./department-notification'),
  RankNotification: sequelize.import('./rank-notification'),
};
Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = models;
