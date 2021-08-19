//models

const Outfit = require('../.././models/outfit.js');

module.exports = {

 upload: async (req, res) =>{
    const { userId, clothingId, outfitCategory } = req.body; //clothingId=array

    const outfit = await Outfit.create({
      outfitCategory: outfitCategory,
      UserId: userId,
    });
    
    //updating ClothingOutfit joint table 
    await outfit.setOutfits(clothingId);
    res.send('Outfit upload successful');
 },

 load: async(_req, res) => {
    const outfit = await Outfit.findAll({
        include: { association: 'Outfits' },
      });
    
      let catObj = {};
    
      for (let i = 0; i < outfit.length; i++) {
        let x = outfit[i].outfitCategory;
        catObj[x] = [];
      }
    
      for (let y = 0; y < outfit.length; y++) {
        if (catObj.hasOwnProperty(outfit[y].outfitCategory)) {
          let x = outfit[y].outfitCategory;
          catObj[x].push(outfit[y]);
        }
      }
    
      res.status(200).send(catObj);
 },

 getCategories: async(_req, res)=> {
    const category = await Outfit.findAll({
        attributes: ['outfitCategory'],
      });
      res.status(200).send(category);
 },

 update: async(req, res)=> {
    const { userId, clothingId, outfitCategory, outfitId } = req.body;

    // case: only updating outfit category
    if (clothingId.length === 0) {
      await Outfit.update(
        {
          outfitCategory: outfitCategory,
        },
        {
          where: { UserId: userId, id: outfitId },
        }
      );
      res.send('Outfit update successful');
    }
  
   
    // case: updating category and clothing images
    if (clothingId.length !== 0) {
      await Outfit.update(
        {
          outfitCategory: outfitCategory,
        },
        {
          where: { UserId: userId, id: outfitId },
        }
      );
  
    /*because Outfit.update only returns the numer of rows affected 
    (not row information), 
    we need to get row information separately
    in order to use it with the setter method 
    that updates the joint table. */

      const outfit = await Outfit.findOne({
        where: { UserId: userId, id: outfitId },
      });
      await outfit.setOutfits(clothingId);
      res.send('Outfit update successful');
    }
 },
 
 delete: async(req, res)=> {

    const { userId, outfitId } = req.query;

    try {
      await Outfit.destroy({
        where: { UserId: userId, id: outfitId },
      });
      res.send('delete successful');
    } catch (error) {
      res.status(400).send(error);
    }
 }
};