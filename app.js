const Requirements = require( './requirements');

const { express, passport, routes } = Requirements;
const { initializeRoutes, initializeError } = routes;

const app = express();
passport(app);
initializeRoutes(app);
initializeError(app);
module.exports = app;
