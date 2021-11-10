import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';
import { actionCreators } from '../.././redux/index.js';

import NavBar from '.././navbar/NavBar.js';
import SideNav from '.././navbar/SideNav.js';
import LookbookPresentational from './LookbookPresentational.js';

const Lookbook = () => {
  const [images, setImages] = useState('');
  const outfitStatus = useSelector(state => state.outfitSelection);

  const dispatch = useDispatch();
  const { outfitReset } = bindActionCreators(actionCreators, dispatch);

  const buttonOnClick = async () => {
    let descriptionArr = [];

    let description = '';

    for (let category in outfitStatus) {
      if (outfitStatus[category].length !== 0) {
        for (let i = 0; i < outfitStatus[category].length; i++) {
          descriptionArr.push(outfitStatus[category][i]);
        }
      }
    }

    for (let i = 0; i < descriptionArr.length; i++) {
      description += ` ${descriptionArr[i].color.substr(
        8,
        descriptionArr[i].color.length - 1
      )} ${descriptionArr[i].description}`;
    }

    description += ` outfit for ${window.sessionStorage.gender}`;

    console.log(description);

    const response = await axios.get(`/api/lookbook/getImages/?description=${description}`);

    setImages(response.data);
  };

  useEffect(() => {
    outfitReset();
  }, []);

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <LookbookPresentational buttonOnClick={buttonOnClick} images={images} />
    </div>
  );
};

export default Lookbook;
