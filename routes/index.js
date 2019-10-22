const mainRouter = require('./main');
const authRouter = require('./auth');

module.exports = (app) => {
  app.use('/main', mainRouter);
  app.use('/auth', authRouter);
};
module.exports.errorRoute = (app) => {
  app.use((req, res) => {
    res.status(404).send(settings.messages.notFound).end();
  });
};
