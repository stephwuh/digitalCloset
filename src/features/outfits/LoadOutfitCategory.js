import axios from 'axios';
import React, {useEffect} from 'react';

import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux/index.js"
import {useDispatch } from 'react-redux';



const LoadOutfitCategory = () => {

    const dispatch = useDispatch();
    const {addOutfitCategory} = bindActionCreators(actionCreators, dispatch);

  const outfitCategoryApi = async () => {
    let categoryArr = [];

    let res = await axios.get('/api/outfit/getCategories');
    for (let i = 0; i < res.data.length; i++) {
      categoryArr.push(res.data[i].outfitCategory);
    }

    return [...new Set(categoryArr)];
  };

  


useEffect( () => {

    const func = async () => {
    let uniqueCategory = await outfitCategoryApi()
    addOutfitCategory(uniqueCategory)
  }

  func()

}, [])

    return (
        <>
        </>
    )

};

export default LoadOutfitCategory;
