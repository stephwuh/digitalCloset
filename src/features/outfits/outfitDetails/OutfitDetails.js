import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { actionCreators } from '../../.././redux/index.js';

import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';
import OutfitDetailsForm from './OutfitDetailsForm.js';

import OutfitsForm from '.././OutfitsForm.js';

const OutfitDetails = () => {
  
  const formUse = 'outfitDetails'

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <OutfitsForm 
      formUse={formUse}
      />
    </div>
  );
};

export default OutfitDetails;
