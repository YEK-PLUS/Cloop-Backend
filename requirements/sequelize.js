const Sequelize = require('sequelize');

const {
  dbname, username, password, host, dialect,
} = settings.database;

module.exports = new Sequelize(dbname, username, password, {
  host,
  dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false
});
