const { express, passport, routes } = require( './requirements');

const app = express();
passport(app);
routes(app);
module.exports = app;
