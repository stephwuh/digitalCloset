const Sequelize = require("sequelize");
require('dotenv').config();

const connection = new Sequelize(process.env.DATABASE_URL, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false
  });

module.exports = connection;