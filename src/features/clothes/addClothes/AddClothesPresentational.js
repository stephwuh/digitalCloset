import React from 'react';
import Colors from '../Colors.js';

import '.././clothes.css';

const AddClothesPresentational = (props) => {
 
  return (
    <div className="page-content">
      <form onSubmit={props.handleSubmitFile}>
        <div className="category-container">
          <h3 className="category-title">Clothing Image</h3>
          <div className="content image">
            {props.image && (
              <img src={props.image} alt="chosen" style={{ height: '100px' }} />
            )}
          </div>

          <input className="file-input"
            type="file"
            accept="image/*"
            id="image-upload"
            onChange={props.handleFileInputChange}
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
            />
            <label for="outerwear">Outerwear</label>
            <br />
            <input
              type="radio"
              id="layer"
              name="category"
              value="layer"
              onChange={props.handleRadioOnChange}
            />
            <label for="layer">Layer</label>
            <br />
            <input
              type="radio"
              id="shirt"
              name="category"
              value="shirt"
              onChange={props.handleRadioOnChange}
            />
            <label for="shirt">Shirt</label>
            <br />
            <input
              type="radio"
              id="pants"
              name="category"
              value="pants"
              onChange={props.handleRadioOnChange}
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
            placeholder=" e.g. beige field jacket, corduroy pants, etc. Include color if color options below are not sufficient.  "
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
          />
          <br />
        </div>

        <div className="category-container">
          <h3 className="category-title">Clothing Color</h3>
          <div className="content">
            <Colors onClick={props.handleColorOnClick} />
          </div>
        </div>
        <div className="button-container">
            <button className="form-button submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddClothesPresentational;
