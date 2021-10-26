import React from 'react';
import { useHistory } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../.././redux/index.js';

import '.././outfits.css';

const GetOutfitImage = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { outfitReset} =
    bindActionCreators(actionCreators, dispatch);

  return (
    <div
      className="outfit-container"
      onClick={() => {
        history.push({
          pathname: '/outfit-details',
          state: { image: props.image, category: props.category },
        });
        outfitReset()
      }}
    >
      {props.image.map((image, index) => {
        return (
          <Image
            className="outfit-image"
            key={index}
            cloudName="drfwodrev"
            publicId={image.image}
            width="50"
            crop="scale"
          />
        );
      })}
    </div>
  );
};

export default GetOutfitImage;
