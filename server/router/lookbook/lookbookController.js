const axios = require("axios");
require("dotenv").config();

module.exports = {
  getImages: async (req, res) => {
    const { description } = req.query;
   
      const response = await axios.get(
        `https://app.zenserp.com/api/v2/search?apikey=${process.env.ZENSERP_KEY}&q=${description}&tbm=isch&gl=US&hl=en&num=50`
      );

      res.status(200).send(response.data);
    
  },
};
