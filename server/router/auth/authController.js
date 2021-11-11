const bcrypt = require('bcrypt');
const User = require('../../.././models/user.js');

module.exports = {
  signUp: async (req, res) => {
    const { firstName, lastName, email, password, gender } = req.body;

    //find duplicate email
    try {
      let userData = await User.findAll({
        where: {
          email: email,
        },
      });

      if (userData[0])
        return res.status(409).send('Account already exists with this email');

      // add logic to salt and hash password (bcrypt)

      const salt = bcrypt.genSaltSync(5);
      const passwordHash = bcrypt.hashSync(password, salt);

      let createdUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordHash,
        gender: gender,
        zipCode: 20170,
      });

      let userInfo = {
        userId: createdUser.dataValues.id,
        gender: createdUser.dataValues.gender
      };

      res.send(userInfo);
    } catch (error) {
      res.sendStatus(500).send(error);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;


    try {
      let userData = await User.findAll({
        where: {
          email: email,
        },
      });


      if (userData[0] === undefined)
        return res.status(401).send('Account does not exist');

      const passwordHash = userData[0].dataValues.password;

      const PWAccuracy = bcrypt.compareSync(password, passwordHash);

      let userInfo = {
        userId: userData[0].dataValues.id,
        gender: userData[0].dataValues.gender
      };

      PWAccuracy
        ? res.send(userInfo)
        : res.status(401).send('Incorrect password');
    } catch (error) {
      res.sendStatus(500).send(error);
    }
  },
};
