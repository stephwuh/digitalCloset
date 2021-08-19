import React from 'react';
import { Image } from 'cloudinary-react';
import Creatable from 'react-select/creatable';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import AddClothesToOutfit from '.././addOutfit/AddClothesToOutfit.js';

const OutfitDetailsForm = props => {
  const location = useLocation();
  const outfitStatus = useSelector(state => state.outfitSelection);

  return (
    <div className="page-content">
      <div className="category-container">
        <h3 className="category-title">Outfit Image</h3>
        {!props.edit && (
          <div className="content image">
            {outfitStatus.outerwear.length === 0 &&
              outfitStatus.layer.length === 0 &&
              outfitStatus.shirt.length === 0 &&
              outfitStatus.pants.length === 0 &&
              location.state.image.map((image, index) => {
                return (
                  <Image
                    key={index}
                    cloudName="drfwodrev"
                    publicId={image.image}
                    width="100"
                    crop="scale"
                  />
                );
              })}
          </div>
        )}
      </div>
      {!props.edit && (
        <>
          <div className="category-container">
            <h3 className="category-title">OutfitCategory</h3>
            <div className="content">
              <h3>{location.state.category}</h3>
            </div>
          </div>
          <div className="button-container">
            <button
              className="form-button update"
              onClick={props.handleEditOnClick}
            >
              Update
            </button>
          </div>
        </>
      )}

      {props.edit && (
        <form onSubmit={props.handleSubmit}>
          <div className="category-container">
            <div className="content image">
              {outfitStatus.outerwear.map((clothe, index) => {
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
              {outfitStatus.layer.map((clothe, index) => {
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
              {outfitStatus.shirt.map((clothe, index) => {
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
              {outfitStatus.pants.map((clothe, index) => {
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
            <button className="form-button submit" type="submit">
              Submit
            </button>
            <button
              className="form-button cancel"
              type="button"
              onClick={props.handleCancelOnClick}
            >
              Cancel
            </button>
            <button
              className="form-button delete"
              type="button"
              onClick={props.handleDeleteOnClick}
            >
              Delete
            </button>
          </div>
          <br />
        </form>
      )}
    </div>
  );
};

export default OutfitDetailsForm;
