import React from 'react';
import { useLocation } from 'react-router-dom';
import { Image } from 'cloudinary-react';

import Colors from './Colors.js';

const ClothingFormPresentational = props => {
  const location = useLocation();

  return (
    <div className="page-content">
      <form
        onSubmit={
          props.formUse === 'addClothes'
            ? props.handleSubmitAddFile
            : props.handleSubmitUpdateFile
        }
      >
        <div className="category-container">
          <h3 className="category-title">Clothing Image</h3>
          <div className="content image">
            {!props.image && props.formUse === 'clothingDetails' && (
              <Image
                cloudName="drfwodrev"
                publicId={location.state.image}
                width="150" //cloudinary uses to transformation
                crop="scale" //cloudinary uses to transformation
              />
            )}
            {props.image && (
              <img src={props.image} alt="chosen" style={{ width: '150px' }} />
            )}
          </div>
          <input
            className="file-input"
            type="file"
            accept="image/*"
            id="image-upload"
            onChange={props.handleFileInputChange}
            disabled={!props.edit && props.formUse === 'clothingDetails'}
          />
        </div>

        <div className="category-container">
          <h3 className="category-title">Clothing Category</h3>
          <div className="content">
            <input
              type="radio"
              id="outerwear"
              name="category"
              value="outerwear"
              onChange={props.handleRadioOnChange}
              disabled={!props.edit && props.formUse === 'clothingDetails'}
              checked={props.category === 'outerwear' ? 'checked' : ''}
            />

            <label for="outerwear">Outerwear</label>
            <br />
            <input
              type="radio"
              id="layer"
              name="category"
              value="layer"
              onChange={props.handleRadioOnChange}
              disabled={!props.edit && props.formUse === 'clothingDetails'}
              checked={props.category === 'layer' ? 'checked' : ''}
            />
            <label for="layer">Layer</label>
            <br />
            <input
              type="radio"
              id="shirt"
              name="category"
              value="shirt"
              onChange={props.handleRadioOnChange}
              disabled={!props.edit && props.formUse === 'clothingDetails'}
              checked={props.category === 'shirt' ? 'checked' : ''}
            />
            <label for="shirt">Shirt</label>
            <br />
            <input
              type="radio"
              id="pants"
              name="category"
              value="pants"
              onChange={props.handleRadioOnChange}
              disabled={!props.edit && props.formUse === 'clothingDetails'}
              checked={props.category === 'pants' ? 'checked' : ''}
            />
            <label for="pants">Pants</label>
            <br />
          </div>
        </div>

        <div className="category-container">
          <h3 className="category-title">Clothing Description</h3>
          <input
            className="content-input-field"
            type="text"
            id="description"
            value={props.description}
            onChange={props.handleDescriptionOnChange}
            readOnly={!props.edit && props.formUse === 'clothingDetails'}
          />
          <br />
        </div>

        <div className="category-container">
          <h3 className="category-title">Brand</h3>
          <input
            className="content-input-field"
            type="text"
            id="brand"
            value={props.brand}
            onChange={props.handleBrandOnChange}
            readOnly={!props.edit && props.formUse === 'clothingDetails'}
          />
          <br />
        </div>
        <div className="category-container">
          <h3 className="category-title">Clothing Color</h3>
          <div className="content">
            <Colors
              onClick={props.handleColorOnClick}
              disabled={!props.edit && props.formUse === 'clothingDetails'}
            />
          </div>
        </div>

        <div className="button-container">
          {props.formUse === 'addClothes' && (
            <button className="form-button submit" type="submit">
              Submit
            </button>
          )}

          {props.edit && props.formUse === 'clothingDetails' && (
            <div>
              <button className="form-button submit" type="submit">
                Submit
              </button>
              <button
                className="form-button cancel"
                onClick={props.handleEditOnClick}
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
          )}

          {!props.edit && props.formUse === 'clothingDetails' && (
            <button
              className="form-button update"
              onClick={props.handleEditOnClick}
            >
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ClothingFormPresentational;
