import React from 'react';
import { useSelector} from 'react-redux';
import { Image } from 'cloudinary-react';
import Carousel from 'react-elastic-carousel';

import AddClothesToOutfit from '../outfits/addOutfit/AddClothesToOutfit.js';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 800, itemsToShow: 4 },
  { width: 1000, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
  { width: 1400, itemsToShow: 7 },
];

const LookbookPresentational = (props) => {

  const outfitStatus = useSelector(state => state.outfitSelection);

  return (


      <div className="page-content">
        <div className="category-container">
          <h3 className="category-title">Clothing Image</h3>

          <div className="content image">
            {outfitStatus &&
              outfitStatus.outerwear.map((clothe, index) => {
                return (
                  <Image
                    key={index}
                    cloudName="drfwodrev"
                    publicId={clothe.image}
                    width="150"
                    crop="scale"
                  />
                );
              })}
            {outfitStatus &&
              outfitStatus.layer.map((clothe, index) => {
                return (
                  <Image
                    key={index}
                    cloudName="drfwodrev"
                    publicId={clothe.image}
                    width="150"
                    crop="scale"
                  />
                );
              })}
            {outfitStatus &&
              outfitStatus.shirt.map((clothe, index) => {
                return (
                  <Image
                    key={index}
                    cloudName="drfwodrev"
                    publicId={clothe.image}
                    width="150"
                    crop="scale"
                  />
                );
              })}
            {outfitStatus &&
              outfitStatus.pants.map((clothe, index) => {
                return (
                  <Image
                    key={index}
                    cloudName="drfwodrev"
                    publicId={clothe.image}
                    width="150"
                    crop="scale"
                  />
                );
              })}
            <br />
          </div>
        </div>
        <div className="category-container">
          <h3 className="category-title">Closet</h3>
          <div className="content">
            <AddClothesToOutfit />
          </div>
        </div>

        <div className="category-container-weather">
          <h3 className="category-title">Lookbook</h3>
          <div className="content-carousel">
            
              {props.images && 
              <Carousel breakPoints={breakPoints}>
                {props.images.image_results.map((outfit, index) => {
                  return <img key={index} src={outfit.thumbnail} width="200" />;
                })}
                </Carousel>
              }
           
          </div>
        </div>
        <div className="button-container">
          <button onClick={props.buttonOnClick} className="weather-update">
            Browse
          </button>
        </div>
      </div>

  );
};

export default LookbookPresentational;
