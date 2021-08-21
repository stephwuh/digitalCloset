
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AddClothesPresentational from './AddClothesPresentational';
import '.././clothes.css';
import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';
import ClothingFrom from '.././ClothingForm.js'

const AddClothes = () => {
  
  const formUse = 'addClothes';

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <ClothingFrom formUse={formUse}/>
    </div>
  );
};

export default AddClothes;
