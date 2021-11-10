//models
const Clothing = require('../../.././models/clothing.js');

module.exports = {

  getClothingImages: (req, res) => {
    const { userId } = req.body;
    Clothing.findAll({
      where: { UserId: userId },
    })
      .then(clothing => {
        res.send(clothing);
      })
      .catch(error => {
        console.log(error);
        res.status(404).send(error);
      });
  }

};
