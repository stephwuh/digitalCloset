import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../.././redux/index.js';
import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';
import AddOutfitPresentational from './AddOutfitPresentational.js';

const AddOutfit = () => {
  const [outfitCategory, setOutfitCategory] = useState('');

  const history = useHistory();

  const outfitStatus = useSelector(state => state.outfitSelection);
  const categoryStatus = useSelector(state => state.outfitCategory);

  const dispatch = useDispatch();
  const { outfitReset } = bindActionCreators(actionCreators, dispatch);

  const categories = [];

  for (let i = 0; i < categoryStatus.length; i++) {
    categories.push({ label: categoryStatus[i] });
  }

  const handleChange = (field, value) => {
    switch (field) {
      case 'categories':
        setOutfitCategory(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      outfitStatus.outerwear.length === 0 &&
      outfitStatus.layer.length === 0 &&
      outfitStatus.shirt.length === 0 &&
      outfitStatus.pants.length === 0 &&
      !outfitCategory
    )
      return;

    if (
      outfitStatus.outerwear.length === 0 &&
      outfitStatus.layer.length === 0 &&
      outfitStatus.shirt.length === 0 &&
      outfitStatus.pants.length === 0
    ) {
      alert('Select at least one piece of clothing to create an outfit');
      return;
    }
    if (!outfitCategory) {
      alert('Please choose an outfit category');
      return;
    }

    let clothingIds = [];

    //nested for loop :(

    for (let clothingCategory in outfitStatus) {
      if (outfitStatus[clothingCategory].length !== 0) {
        for (let i = 0; i < outfitStatus[clothingCategory].length; i++) {
          clothingIds.push(outfitStatus[clothingCategory][i].id);
        }
      }
    }

    if (clothingIds.length !== [...new Set(clothingIds)].length) {
      alert('Cannot use same item multiple times to form outfit');
      return;
    }

    let file = {
      userId: sessionStorage.getItem('userId'),
      clothingId: clothingIds, //array
      outfitCategory: outfitCategory.label,
    };

    try {
      let res = await axios.post('/api/outfit/upload', file);
      console.log(res);
      outfitReset();

      alert('Outfit added');

      history.push('/outfits');

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    outfitReset();
  }, []);

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <AddOutfitPresentational
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        categories={categories}
        outfitCategory={outfitCategory}
      />
    </div>
  );
};

export default AddOutfit;
