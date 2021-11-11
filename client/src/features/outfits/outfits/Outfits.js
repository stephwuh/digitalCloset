import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import GetOutfitSubcomponent from './GetOutfitSubcomponent.js';

import NavBar from '../.././navbar/NavBar.js';
import SideNav from '../.././navbar/SideNav.js';

const Outfits = () => {
  const [asyncData, setAsyncData] = useState(null);

  const categoryStatus = useSelector(state => state.outfitCategory);

  console.log(categoryStatus)

  const loadOutfit = async () => {
    //using a post instead of a get because I need to send id info
    let res = await axios.get(`/api/outfit/load/${window.sessionStorage.userId}`);

    setAsyncData(res.data);
  };

  useEffect(() => {
    loadOutfit();
  }, []);

  if (!asyncData) return <div>...loading</div>;

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <div className="page-content">
        {categoryStatus.length===0 && <div className='no-outfits'><h3>No Outfits to Show</h3></div>}
        {categoryStatus &&
          categoryStatus.map(category => {
            return (
              <div className="category-container">
                <h3 className="category-title">{category}</h3>
                <GetOutfitSubcomponent
                  outfit={asyncData[category]}
                  category={category}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Outfits;
