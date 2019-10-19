const routes = require('../routes');
const sequelize = require('./sequelize');
const express = require('./express');
const apollo = require('./apollo');
const security = require('./security');

module.exports = {
  routes,
  sequelize,
  express,
  apollo,
  security,
};
