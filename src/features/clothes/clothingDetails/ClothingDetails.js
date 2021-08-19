import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import ClothingDetailsPresentational from './ClothingDetailsPresentational.js';
import NavBar from '../../navbar/NavBar.js';
import SideNav from '../../navbar/SideNav.js';


const ClothingDetails = () => {
  
  const history = useHistory();
  const location = useLocation();

  const [image, setImage] = useState('');
  const [category, setCategory] = useState(location.state.clothingCategory);
  const [brand, setBrand] = useState(location.state.brand);
  const [color, setColor] = useState(location.state.color);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(location.state.description);

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
    alert("Successfully updated")
  };

  const uploadFile = async obj => {
    try {
      let response = await axios.put('/api/clothing/update', {
        clothingId: location.state.id,
        clothingImage: obj.fileImage,
        clothingImageCloudinary: location.state.image,
        clothingCategory: obj.fileCategory,
        clothingBrand: obj.fileBrand,
        clothingColor: obj.fileColor,
        clothingDescription: obj.fileDescription,
        userId: sessionStorage.getItem('userId'),
      });

      history.push('/closet');

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditOnClick = () => {
    setEdit(!edit);
  }

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
    <div className="page-container">
      <NavBar />
      <SideNav />
      <ClothingDetailsPresentational 
        handleSubmitFile={handleSubmitFile}
        handleFileInputChange={handleFileInputChange}
        handleRadioOnChange={handleRadioOnChange}
        handleBrandOnChange={handleBrandOnChange}
        handleColorOnClick={handleColorOnClick}
        handleEditOnClick={handleEditOnClick}
        handleDeleteOnClick={handleDeleteOnClick}
        handleDescriptionOnChange={handleDescriptionOnChange}
        image={image}
        edit={edit}
        category={category}
        brand={brand}
        description={description}
      />
    </div>
  );
};

export default ClothingDetails;
