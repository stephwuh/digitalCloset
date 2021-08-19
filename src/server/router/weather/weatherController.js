//models
const User = require('../.././models/user.js');

module.exports = {

 updateZipCode: async(req, res)=> {
    const { userId, zipCode } = req.body;

    try {
      await User.update(
        {
          zipCode: zipCode,
        },
        {
          where: { id: userId },
        }
      );
      res.send('Zip code update successful');
    } catch (error) {
      res.status(400).send(error);
    }
 },

 getZipCode: async(req, res)=> {
    const { userId } = req.query;

    try {
      let user = await User.findOne({
        where: { id: userId },
      });
  
      let userZipCode = user.dataValues.zipCode;
  
      res.send(userZipCode);
      
    } catch (error) {
      res.status(400).send(error);
    }
 }

};