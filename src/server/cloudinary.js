const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'drfwodrev', 
    api_key: '692158739874889', 
    api_secret: '-k1NRL_b1RYwCFigmGTGYNrAyNg' 
  });

module.exports = { cloudinary };