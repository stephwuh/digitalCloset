import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Image } from 'cloudinary-react';

import Colors from './Colors.js';

const ClothingForm = props => {

  const history = useHistory();
  const location = useLocation();

  const [formUse, setFormUse] = useState(props.formUse); 
  const [image, setImage] = useState('');
  const [category, setCategory] = useState(props.formUse === 'clothingDetails' ? location.state.clothingCategory : '');
  const [brand, setBrand] = useState(props.formUse === 'clothingDetails' ? location.state.brand : '');
  const [color, setColor] = useState(props.formUse === 'clothingDetails' ? location.state.color : '');
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(props.formUse === 'clothingDetails' ? location.state.description : '');


  const handleFileInputChange = e => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = file => {
    const reader = new FileReader(); //converts file to binary string
    reader.readAsDataURL(file); //converts image to a string
    reader.onloadend = () => {
      //event handler for loadend event, which is fired when a request has completed
      setImage(reader.result);
    };
  };

  const handleRadioOnChange = e => {
    setCategory(e.target.value);
  };

  const handleBrandOnChange = e => {
    setBrand(e.target.value);
  };

  const handleDescriptionOnChange = e => {
    setDescription(e.target.value);
  };

  const handleColorOnClick = e => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const handleSubmitUpdateFile = async e => {
    e.preventDefault();

    if (!image && !category && !color) return;

    let file = {
      clothingId: location.state.id,
      clothingImage: image,
      clothingImageCloudinary: location.state.image,
      clothingCategory: category,
      clothingBrand: brand,
      clothingColor: color,
      clothingDescription: description,
      userId: sessionStorage.getItem('userId'),
    };

    try {
      await axios.put('/api/clothing/update', file);
    } catch (error) {
      console.log(error);
    }

    alert('Successfully updated');

    history.push('/closet');

    window.location.reload();
  };

  const handleSubmitAddFile = async e => {
    e.preventDefault();

    if (!image && !category && !color) return;

    let file = {

      clothingImage: image,
      clothingCategory: category,
      clothingBrand: brand,
      clothingColor: color,
      clothingDescription: description,
      userId: sessionStorage.getItem('userId'),
    };

    try {
      await axios.post('/api/clothing/upload', file);
      alert('Successfully updated');
    } catch (error) {
      console.log(error);
    }

    history.push('/closet');

    window.location.reload();
  };

  const handleEditOnClick = () => {
    setEdit(!edit);
  };

  const handleDeleteOnClick = async () => {
    try {
      await axios.delete(
        `/api/clothing/delete/?userId=${sessionStorage.getItem(
          'userId'
        )}&clothingId=${location.state.id}&cloudinaryId=${location.state.image}`
      );

      alert('Clothing deleted from closet');
      history.push('/closet');

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  return (
      
    <div className="page-content">
      <form
        onSubmit={
          formUse === 'addClothes'
            ? handleSubmitAddFile
            : handleSubmitUpdateFile
        }
      >
        <div className="category-container">
          <h3 className="category-title">Clothing Image</h3>
          <div className="content image">
            {!image && formUse === 'clothingDetails' && (
              <Image
                cloudName="drfwodrev"
                publicId={location.state.image}
                width="150" //cloudinary uses to transformation
                crop="scale" //cloudinary uses to transformation
              />
            )}
            {image && (
              <img src={image} alt="chosen" style={{ width: '150px' }} />
            )}
          </div>
          <input
            className="file-input"
            type="file"
            accept="image/*"
            id="image-upload"
            onChange={handleFileInputChange}
            disabled={!edit && formUse === 'clothingDetails'}
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
              onChange={handleRadioOnChange}
              disabled={!edit && formUse === 'clothingDetails'}
              checked={category === 'outerwear' ? 'checked' : ''}
            />

            <label for="outerwear">Outerwear</label>
            <br />
            <input
              type="radio"
              id="layer"
              name="category"
              value="layer"
              onChange={handleRadioOnChange}
              disabled={!edit && formUse === 'clothingDetails'}
              checked={category === 'layer' ? 'checked' : ''}
            />
            <label for="layer">Layer</label>
            <br />
            <input
              type="radio"
              id="shirt"
              name="category"
              value="shirt"
              onChange={handleRadioOnChange}
              disabled={!edit && formUse === 'clothingDetails'}
              checked={category === 'shirt' ? 'checked' : ''}
            />
            <label for="shirt">Shirt</label>
            <br />
            <input
              type="radio"
              id="pants"
              name="category"
              value="pants"
              onChange={handleRadioOnChange}
              disabled={!edit && formUse === 'clothingDetails'}
              checked={category === 'pants' ? 'checked' : ''}
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
            value={description}
            onChange={handleDescriptionOnChange}
            readOnly={!edit && formUse === 'clothingDetails'}
          />
          <br />
        </div>

        <div className="category-container">
          <h3 className="category-title">Brand</h3>
          <input
            className="content-input-field"
            type="text"
            id="brand"
            value={brand}
            onChange={handleBrandOnChange}
            readOnly={!edit && formUse === 'clothingDetails'}
          />
          <br />
        </div>
        <div className="category-container">
          <h3 className="category-title">Clothing Color</h3>
          <div className="content">
            <Colors
              onClick={handleColorOnClick}
              disabled={!edit && formUse === 'clothingDetails'}
            />
          </div>
        </div>
            
        <div className="button-container">
            

        
          {formUse === 'addClothes' && (
            <button className="form-button submit" type="submit">
              Submit
            </button>
          )}

          {edit &&
            formUse ===
              'clothingDetails' && (
                <div>
                  <button className="form-button submit" type="submit">
                    Submit
                  </button>
                  <button
                    className="form-button cancel"
                    onClick={handleEditOnClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="form-button delete"
                    type="button"
                    onClick={handleDeleteOnClick}
                  >
                    Delete
                  </button>
                </div>
              )}

          {!edit && formUse === 'clothingDetails' && (
            <button className="form-button update" onClick={handleEditOnClick}>
              Update
            </button>
          )}
 
        </div>
      </form>
    </div>
  );
};

export default ClothingForm;
