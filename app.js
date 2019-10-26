const {
  express, apollo, routes, security,
} = require('./requirements');

const app = express();
routes(app);
security(app);
apollo(app);
routes.errorRoute(app);
module.exports = app;
