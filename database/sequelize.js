const Sequelize = require("sequelize");
require('dotenv').config();

const connection = new Sequelize(process.env.SEQUELIZE_DATABASE_NAME, process.env.SEQUELIZE_DATABASE_USER_ID, process.env.SEQUELIZE_DATABASE_PW, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false
  });

module.exports = connection;