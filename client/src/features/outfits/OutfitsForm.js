import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import OutfitsFormPresentational from './OutfitsFormPresentational.js';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { actionCreators } from '../.././redux/index.js';

const OutfitsForm = props => {
  const location = useLocation();
  const history = useHistory();

  const [outfit, setOutfit] = useState(false);
  const [outfitCategory, setOutfitCategory] = useState(
    props.formUse === 'outfitDetails' ? location.state.category : ''
  );
  const [edit, setEdit] = useState(
    props.formUse === 'addOutfit' ? true : false
  );

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
      outfitCategory === false
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

    if (props.formUse === 'outfitDetails') {
      let file = {
        userId: sessionStorage.getItem('userId'),
        clothingId: clothingIds, //array
        outfitCategory: outfitCategory.label,
        outfitId: location.state.image[0].ClothingOutfit.OutfitId,
      };

      try {
        await axios.put('/api/outfit/update', file);

        alert('Outfit updated');

        history.push('/outfits');

        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

    if (props.formUse === 'addOutfit') {
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
    }
  };

  const handleEditOnClick = () => {
    setEdit(!edit);
  };

  const handleCancelOnClick = () => {
    setEdit(false);
    outfitReset();
    setOutfit(false);
  };

  const handleDeleteOnClick = async () => {
    try {
      await axios.delete(
        `/api/outfit/delete/?userId=${sessionStorage.getItem(
          'userId'
        )}&outfitId=${location.state.image[0].ClothingOutfit.OutfitId}`
      );

      alert('Outfit deleted');
      history.push('/outfits');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    outfitReset();
  }, []);

  return (
    <OutfitsFormPresentational
      handleEditOnClick={handleEditOnClick}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleCancelOnClick={handleCancelOnClick}
      handleDeleteOnClick={handleDeleteOnClick}
      formUse={props.formUse}
      edit={edit}
      outfitCategory={outfitCategory}
      categories={categories}
    />
  );
};

export default OutfitsForm;
