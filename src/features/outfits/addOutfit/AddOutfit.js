import React from 'react';
import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';
import OutfitsForm from '.././OutfitsForm.js';

const AddOutfit = () => {
 
  const formUse = 'addOutfit'
  const edit = true

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <OutfitsForm formUse={formUse} edit={edit} />
    </div>
  );
};

export default AddOutfit;
