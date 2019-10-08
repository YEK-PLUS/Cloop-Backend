const { express, routes, security } = require( './requirements');
const app = express();
security(app);
routes(app);
module.exports = app;
