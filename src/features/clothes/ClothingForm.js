import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import ClothingFormPresentational from './ClothingFormPresentational.js';

const ClothingForm = props => {
  const history = useHistory();
  const location = useLocation();

  const [formUse, setFormUse] = useState(props.formUse);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState(
    props.formUse === 'clothingDetails' ? location.state.clothingCategory : ''
  );
  const [brand, setBrand] = useState(
    props.formUse === 'clothingDetails' ? location.state.brand : ''
  );
  const [color, setColor] = useState(
    props.formUse === 'clothingDetails' ? location.state.color : ''
  );
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(
    props.formUse === 'clothingDetails' ? location.state.description : ''
  );

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

    const handleCancelOnClick = () => {
      setEdit(false);
  
    };


  return (
    <ClothingFormPresentational
      handleSubmitAddFile={handleSubmitAddFile}
      handleSubmitUpdateFile={handleSubmitUpdateFile}
      handleFileInputChange={handleFileInputChange}
      handleRadioOnChange={handleRadioOnChange}
      handleDescriptionOnChange={handleDescriptionOnChange}
      handleBrandOnChange={handleBrandOnChange}
      handleColorOnClick={handleColorOnClick}
      handleEditOnClick={handleEditOnClick}
      handleDeleteOnClick={handleDeleteOnClick}
      handleCancelOnClick={handleCancelOnClick}
      image={image}
      formUse={formUse}
      edit={edit}
      category={category}
      description={description}
      brand={brand}
    />
  );
};

export default ClothingForm;
