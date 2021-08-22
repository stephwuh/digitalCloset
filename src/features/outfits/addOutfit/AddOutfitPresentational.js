import React from 'react';
import { Image } from 'cloudinary-react';
import Creatable from 'react-select/creatable';
import { useSelector} from 'react-redux';

import AddClothesToOutfit from './AddClothesToOutfit.js'




const AddOutfitPresentational = (props) => {  

  const outfitStatus = useSelector(state => state.outfitSelection);  

    return(
      <div className="page-content">
      <form onSubmit={props.handleSubmit}>
        <div className="category-container">
          <h3 className="category-title">Outfit Image</h3>
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
            <AddClothesToOutfit/>
            </div>
            </div>
          
      
        <div className="category-container">
    
            <h3 className="category-title">Outfit Category</h3>
            <div className="content">
              <Creatable
                isClearable
                options={props.categories}
                onChange={value => props.handleChange('categories', value)}
                value={props.outfitCategory}
              />
            </div>
      
        </div>
        <div className="button-container">
        <button className="form-button submit" type="submit">Submit</button>
        </div>
      </form>

      


    </div>
    )
}

export default AddOutfitPresentational;