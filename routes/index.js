const mainRouter require( './main');
export const initializeRoutes = (app) => {
  app.use('/main', mainRouter);
};
export const initializeError = (app) => {
  app.use((req, res) => {
    res.send(404, { error: 'not found' });
  });
};
export default { initializeRoutes, initializeError };
