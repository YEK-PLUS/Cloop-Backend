const express = require( 'express');
const cookieParser = require( 'cookie-parser');
const logger = require( 'morgan');
const session = require( 'express-session');
const cors = require( 'cors');
const corsOptions = require( '../middlewares/cors');
const logging = require( '../middlewares/logging');

module.exports = () => {
  const app = express();
  const sessionOption = {
    secret: settings.secretKeys.session,
    resave: false,
    saveUninitialized: false,
  };


  app.use(logger('combined', { stream: logging }));
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session(sessionOption));
  app.use('*', cors(corsOptions));

  return app;
};
