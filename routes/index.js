const mainRouter = require('./main');
const authRouter = require('./auth');
const translateRouter = require('./translate');

module.exports = (app) => {
  app.use('/main', mainRouter);
  app.use('/auth', authRouter);
  app.use('/translate', translateRouter);
};
module.exports.errorRoute = (app) => {
  app.use((req, res) => {
    res.status(404).send(settings.messages.notFound).end();
  });
};
