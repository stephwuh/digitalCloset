import React from 'react';
import NavBar from '../../navbar/NavBar.js';
import SideNav from '../../navbar/SideNav.js';
import ClothingForm from '.././ClothingForm.js'


const ClothingDetails = () => {

  const formUse = 'clothingDetails';

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <ClothingForm formUse={formUse}/>
    </div>
  );
};

export default ClothingDetails;
