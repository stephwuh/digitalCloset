const Sequelize = require("sequelize");

const connection = new Sequelize('digitalCloset', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false
  });

module.exports = connection;