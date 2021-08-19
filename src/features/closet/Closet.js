import React from 'react';
import { Image } from 'cloudinary-react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Carousel from 'react-elastic-carousel';

import '../.././App.css';
import NavBar from '.././navbar/NavBar.js';
import SideNav from '.././navbar/SideNav.js';

import './closet.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 450, itemsToShow: 3 },
  { width: 600, itemsToShow: 4 },
  { width: 750, itemsToShow: 5 },
  { width: 900, itemsToShow: 6 },
  { width: 1050, itemsToShow: 7 },
  { width: 1200, itemsToShow: 8 },
  { width: 1350, itemsToShow: 9 },
  { width: 1500, itemsToShow: 10 },
];

const Closet = () => {
  const history = useHistory();
  const closet = useSelector(state => state.loadCloset);

  return (
    <div className="page-container">
      <NavBar />
      <SideNav />
      <div className="page-content">
        <div className="category-container">
          <h3 className="category-title">Outerwear</h3>
          <div className="content-carousel">
            <Carousel breakPoints={breakPoints}>
              {closet.outerwear.length === 0 && <h3>Nothing to Show</h3>}
              {closet.outerwear &&
                closet.outerwear.map((clothe, index) => {
                  return (
                    <div>
                      <Image
                        key={index}
                        cloudName="drfwodrev"
                        publicId={clothe.image}
                        width="150" //cloudinary uses to transformation
                        crop="scale" //cloudinary uses to transformation
                        onClick={() => {
                          history.push({
                            pathname: '/closet/clothing-details',
                            state: clothe,
                          });
                        }}
                      />
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </div>
        <div className="category-container">
          <h3 className="category-title">Layers</h3>
          <div className="content-carousel">
            <Carousel breakPoints={breakPoints}>
              {closet.layer.length === 0 && <h3>Nothing to Show</h3>}
              {closet.layer &&
                closet.layer.map((clothe, index) => {
                  return (
                    <Image
                      key={index}
                      cloudName="drfwodrev"
                      publicId={clothe.image}
                      width="150" //cloudinary uses to transformation
                      crop="scale" //cloudinary uses to transformation
                      onClick={() => {
                        history.push({
                          pathname: '/closet/clothing-details',
                          state: clothe,
                        });
                      }}
                    />
                  );
                })}
            </Carousel>
          </div>
        </div>
        <div className="category-container">
          <h3 className="category-title">Shirts</h3>
          <div className="content-carousel">
            <Carousel breakPoints={breakPoints}>
              {closet.shirt.length === 0 && <h3>Nothing to Show</h3>}
              {closet.shirt &&
                closet.shirt.map((clothe, index) => {
                  return (
                    <Image
                      key={index}
                      cloudName="drfwodrev"
                      publicId={clothe.image}
                      width="150" //cloudinary uses to transformation
                      crop="scale" //cloudinary uses to transformation
                      onClick={() => {
                        history.push({
                          pathname: '/closet/clothing-details',
                          state: clothe,
                        });
                      }}
                    />
                  );
                })}
            </Carousel>
          </div>
        </div>
        <div className="category-container">
          <h3 className="category-title">Pants</h3>
          <div className="content-carousel">
            <Carousel breakPoints={breakPoints}>
              {closet.pants.length === 0 && <h3>Nothing to Show</h3>}
              {closet.pants &&
                closet.pants.map((clothe, index) => {
                  return (
                    <Image
                      key={index}
                      cloudName="drfwodrev"
                      publicId={clothe.image}
                      width="150" //cloudinary uses to transformation
                      crop="scale" //cloudinary uses to transformation
                      onClick={() => {
                        history.push({
                          pathname: '/closet/clothing-details',
                          state: clothe,
                        });
                      }}
                    />
                  );
                })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Closet;
