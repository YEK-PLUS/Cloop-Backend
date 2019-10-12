const models = {
  User:sequelize.import('./user'),
  UserDetail:sequelize.import('./userDetail'),
};
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
module.exports = models;
