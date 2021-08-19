
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AddClothesPresentational from './AddClothesPresentational';
import '.././clothes.css';
import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';

const AddClothes = () => {
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('');

  const history = useHistory();

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
  }

  const handleColorOnClick = e => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const handleSubmitFile = e => {
    e.preventDefault();
    if (!image && !category && !color) return;
    let file = {
      fileImage: image,
      fileCategory: category,
      fileBrand: brand,
      fileDescription: description,
      fileColor: color,
    };
    uploadFile(file);

    alert('Clothing added to closet');

    history.push('/closet');

    window.location.reload();
  };

  const uploadFile = async obj => {
    try {
      await axios.post('/api/clothing/upload', {
        clothingImage: obj.fileImage,
        clothingCategory: obj.fileCategory,
        clothingBrand: obj.fileBrand,
        clothingColor: obj.fileColor,
        clothingDescription: obj.fileDescription,
        userId: sessionStorage.getItem('userId'),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <AddClothesPresentational
        handleSubmitFile={handleSubmitFile}
        handleFileInputChange={handleFileInputChange}
        handleRadioOnChange={handleRadioOnChange}
        handleBrandOnChange={handleBrandOnChange}
        handleColorOnClick={handleColorOnClick}
        handleDescriptionOnChange={handleDescriptionOnChange}
        image={image}
        brand={brand}
        description={description}
      />
    </div>
  );
};

export default AddClothes;
