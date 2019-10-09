const { express, apollo, routes, security } = require( './requirements');
const app = express();
// security(app);
apollo(app);
routes(app);
module.exports = app;
