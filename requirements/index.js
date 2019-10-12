const routes = require('../routes');
const sequelize = require('./sequelize');
const express = require('./express');
const apollo = require('./apollo');

module.exports = {
  routes,
  sequelize,
  express,
  apollo,
};
