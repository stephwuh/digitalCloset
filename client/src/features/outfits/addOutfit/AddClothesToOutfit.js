import React from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../.././redux/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from 'cloudinary-react';

import Carousel from 'react-elastic-carousel';

import '.././outfits.css';

const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 300, itemsToShow: 2},
  { width: 450, itemsToShow: 3},
  { width: 600, itemsToShow: 4},
  { width: 750, itemsToShow: 5},
  { width: 900, itemsToShow: 6},
  { width: 1050, itemsToShow: 7},
  { width: 1200, itemsToShow: 8},
  { width: 1350, itemsToShow: 9},
  { width: 1500, itemsToShow: 10},
]


const AddClothesToOutfit = () => {

  const clothes = useSelector(state => state.loadCloset);

  const dispatch = useDispatch();
  const { addOuterwear, addLayer, addShirt, addPants } =
    bindActionCreators(actionCreators, dispatch);
  
  return (
    <div>
      <h3 className="category-title">Outerwear</h3>
      <Carousel breakPoints={breakPoints} >
        {clothes.outerwear.length === 0 && <h3>Nothing to Show</h3>}
        {clothes.outerwear &&
          clothes.outerwear.map((clothe, index) => {
            return (
              <span>
                <Image
                  key={index}
                  cloudName="drfwodrev"
                  publicId={clothe.image}
                  width="150"
                  crop="scale"
                  onClick={() => addOuterwear(clothe)}
                />
              </span>
            );
          })}
        </Carousel>
      <h3 className="category-title">Layers</h3>
      <Carousel breakPoints={breakPoints} >
        {clothes.layer.length === 0 && <h3>Nothing to Show</h3>}
        {clothes.layer &&
          clothes.layer.map((clothe, index) => {
            return (
              <Image
                key={index}
                cloudName="drfwodrev"
                publicId={clothe.image}
                width="150"
                crop="scale"
                onClick={() => addLayer(clothe)}
              />
            );
          })}
        </Carousel>
      <h3 className="category-title">Shirts</h3>
      <Carousel breakPoints={breakPoints} >
        {clothes.shirt.length === 0 && <h3>Nothing to Show</h3>}
        {clothes.shirt &&
          clothes.shirt.map((clothe, index) => {
            return (
              <Image
                key={index}
                cloudName="drfwodrev"
                publicId={clothe.image}
                width="150"
                crop="scale"
                onClick={() => addShirt(clothe)}
              />
            );
          })}
        </Carousel>
      
      <h3 className="category-title">Pants</h3>
      <Carousel breakPoints={breakPoints} >
        {clothes.pants.length === 0 && <h3>Nothing to Show</h3>}
        {clothes.pants &&
          clothes.pants.map((clothe, index) => {
            return (
              <Image
                key={index}
                cloudName="drfwodrev"
                publicId={clothe.image}
                width="150"
                crop="scale"
                onClick={() => addPants(clothe)}
              />
            );
          })}
        </Carousel>
    </div>
  );
};

export default AddClothesToOutfit;
