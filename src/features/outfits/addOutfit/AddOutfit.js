import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../.././redux/index.js';
import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';
import AddOutfitPresentational from './AddOutfitPresentational.js';
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
