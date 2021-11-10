const { cloudinary } = require('../.././cloudinary.js');

const Clothing = require('../../.././models/clothing.js');

module.exports = {
  
  upload: async (req, res) => {
    const {
      clothingImage,
      clothingCategory,
      clothingDescription,
      clothingBrand,
      clothingColor,
      userId,
    } = req.body;

    console.log(req.body)

    try {
      const uploadedResponse = await cloudinary.uploader.upload(clothingImage, {
        upload_preset: 'capstoneProject',
      });

      console.log(uploadedResponse)

      let image_public_id = uploadedResponse.public_id;
      await Clothing.create({
        image: image_public_id,
        clothingCategory: clothingCategory,
        brand: clothingBrand,
        color: clothingColor,
        description: clothingDescription,
        UserId: userId,
      });
      res.status(200).send('upload successful');
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  update: async (req, res) => {
    const {
      clothingId,
      clothingImage,
      clothingImageCloudinary,
      clothingCategory,
      clothingDescription,
      clothingBrand,
      clothingColor,
      userId,
    } = req.body;

    try {
      // case where image is also updated
      if (clothingImage && clothingImageCloudinary) {
        await cloudinary.uploader.destroy(
          clothingImageCloudinary,
          (error, result) => {
            console.log(result, error);
          }
        );

        const uploadedResponse = await cloudinary.uploader.upload(
          clothingImage,
          {
            upload_preset: 'capstoneProject',
          }
        );

        let image_public_id = uploadedResponse.public_id;

        await Clothing.update(
          {
            image: image_public_id,
            clothingCategory: clothingCategory,
            brand: clothingBrand,
            color: clothingColor,
            description: clothingDescription
          },
          {
            where: { UserId: userId, id: clothingId },
          }
        );
      }

      // case where image is not updated
      if (!clothingImage && clothingImageCloudinary) {
        await Clothing.update(
          {
            clothingCategory: clothingCategory,
            brand: clothingBrand,
            color: clothingColor,
            description: clothingDescription
          },
          {
            where: { UserId: userId, id: clothingId },
          }
        );
      }

      res.status(200).send('Update successful');
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  delete: async (req, res) => {
    const { userId, clothingId, cloudinaryId } = req.query;

    try {
      await cloudinary.uploader.destroy(cloudinaryId, (error, result) => {
        console.log(result, error);
      });

      await Clothing.destroy({
        where: { UserId: userId, id: clothingId },
      });

      res.send('delete successful');
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
