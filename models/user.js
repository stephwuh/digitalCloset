const Sequelize = require("sequelize");
const connection = require('.././database/sequelize.js')

const User = connection.define('User', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,  
      allowNull: false
        
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,  
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipCode: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    }
    
}, {
    timestamps: false
})

module.exports = User;