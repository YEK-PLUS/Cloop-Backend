#!/usr/bin/env node

const http = require('http');
global.settings = require('./settings');
global.sequelize = require('./requirements/sequelize');

const app = require('./app');

const port = (process.env.PORT || '8080');
app.set('port', port);

sequelize.sync().then(async () => {
  app.listen({port}, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});
