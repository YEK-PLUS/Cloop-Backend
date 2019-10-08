const routes = require( '../routes');
const sequelize = require( './sequelize');
const express = require( './express');
const security = require('./security');
module.exports = {
    routes,
    sequelize,
    express,
    security
};
