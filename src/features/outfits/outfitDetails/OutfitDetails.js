import React from 'react';
import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';

import OutfitsForm from '.././OutfitsForm.js';

const OutfitDetails = () => {
  
  const formUse = 'outfitDetails';

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <OutfitsForm formUse={formUse} />
    </div>
  );
};

export default OutfitDetails;
