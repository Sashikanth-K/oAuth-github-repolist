const path = require('path');

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./sqlite-dev.db"
  },
  test: {
    dialect: "sqlite",
    storage: "./sqlite-dev.db"
  },
  production: {
    storage: "./sqlite-prod.db",
    dialect: 'postgres',
  },
};