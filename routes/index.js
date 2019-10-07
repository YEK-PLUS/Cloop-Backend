const mainRouter= require( './main');
 const initializeRoutes = (app) => {
  app.use('/main', mainRouter);
};
 const initializeError = (app) => {
  app.use((req, res) => {
    res.send(404, { error: 'not found' });
  });
};
module.exports = { initializeRoutes, initializeError };
