const mainRouter= require( './main');

module.exports = (app) => {
  app.use('/main', mainRouter);

  app.use((req, res) => {
    res.status(404).send(settings.messages.notFound).end();
  });
};
