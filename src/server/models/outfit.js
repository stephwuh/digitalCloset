const Sequelize = require("sequelize");
const connection = require('.././database/sequelize.js')

const Outfit = connection.define('Outfit', {
    outfitCategory: {
      type: Sequelize.STRING,
      allowNull: false
    },
    outfitImage: {
      type: Sequelize.STRING,     
    }
    
}, {
    timestamps: false
})

module.exports = Outfit;