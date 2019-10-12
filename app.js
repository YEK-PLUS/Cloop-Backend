const {
  express, apollo, routes,
} = require('./requirements');

const app = express();
apollo(app);
routes(app);
module.exports = app;
