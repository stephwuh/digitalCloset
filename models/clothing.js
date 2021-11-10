const Sequelize = require("sequelize");
const connection = require('.././database/sequelize.js')

const Clothing = connection.define('Clothing', {
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
    clothingCategory: {
      type: Sequelize.STRING,  
      allowNull: false
    },
    brand: {
      type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
      type: Sequelize.STRING
  }
}, {
    timestamps: false
})

module.exports = Clothing;