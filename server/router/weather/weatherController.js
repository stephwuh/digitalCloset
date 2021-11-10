//models
const User = require("../../.././models/user.js");
const axios = require("axios");
require("dotenv").config();

module.exports = {
  updateZipCode: async (req, res) => {
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
      res.send("Zip code update successful");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getZipCode: async (req, res) => {
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
  },

  getWeather: async (req, res) => {
    const { userId } = req.query;

    let userZipCode;

    try {
      if (userId === 0) {
        userZipCode = 20170;
      } else {
        const user = await User.findOne({
          where: { id: userId },
        });
        userZipCode = user.dataValues.zipCode;
      }

      const weather = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHERAPI_KEY}&q=${userZipCode}&days=3&aqi=yes&alerts=no`
      );

      res.status(200).send(weather.data);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
