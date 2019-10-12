#!/usr/bin/env node

global.settings = require('./settings');
global.sequelize = require('./requirements/sequelize');

const app = require('./app');

const port = (process.env.PORT || '8080');
app.set('port', port);

sequelize.sync().then(async () => {
  app.listen({ port }, () => {
    // eslint-disable-next-line no-console
    console.info(`Cloop Backend running on ${port}`);
  });
});
