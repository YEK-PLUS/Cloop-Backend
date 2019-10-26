const {
  express, apollo, routes, security,
} = require('./requirements');

const app = express();
security(app);
routes(app);
apollo(app);
routes.errorRoute(app);
module.exports = app;
