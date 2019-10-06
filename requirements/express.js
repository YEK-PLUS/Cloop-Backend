import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import cors from 'cors';
import corsOptions from '../middlewares/cors';
import logging from '../middlewares/logging';

export default () => {
  const app = express();
  const sessionOption = {
    secret: settings.secretKeys.session,
    resave: true,
    saveUninitialized: true,
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
