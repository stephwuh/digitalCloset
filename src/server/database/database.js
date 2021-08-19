const Sequelize = require('sequelize');

const connection = require('./sequelize.js');

//models
const User = require('.././models/user.js');
const Outfit = require('.././models/outfit.js');
const Clothing = require('.././models/clothing.js');


//association tables

User.hasMany(Clothing);
User.hasMany(Outfit);

Clothing.belongsToMany(Outfit, { as: 'Clothes', through: 'ClothingOutfit', foreignKey: 'ClothingId'})
Outfit.belongsToMany(Clothing, { as: 'Outfits', through: 'ClothingOutfit', foreignKey: 'OutfitId'})


module.exports = connect = ()=>{
  connection
  .sync({
    // force: true,
    alter: true,
    logging: console.log
  })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}
